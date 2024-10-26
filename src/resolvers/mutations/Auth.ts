import * as bcrypt from "bcryptjs";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Context } from "../../context/Context";
import { role, User } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth } from "../../middleware/MiddleWare";

import { sendResetPasswordOtp } from "../../utils/SendResetPassword";
import { AuthResponse } from "../../types/ResolverTypes";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/GenerateJwt";

@Resolver(() => User)
export class AuthResolver {
  @Mutation(() => String)
  async registerUser(
    @Arg("name") name: string,
    @Arg("email", { nullable: true }) email: string,
    @Arg("phoneNo", { nullable: true }) phoneNo: string,
    @Arg("password") password: string,
    @Arg("role", () => role, { nullable: true }) role: role.PATIENT
  ) {
    try {
      if (!name || !password || !email || !phoneNo || !role) {
        throw new GraphQLError("Please fill all fields");
      }
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new GraphQLError("Please provide a valid email address.");
        }
      }
      if (phoneNo) {
        if (phoneNo) {
          const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
          if (!phoneRegex.test(phoneNo)) {
            throw new GraphQLError("The phone number is not valid.");
          }
        }
      }
      if (password.length < 8) {
        throw new GraphQLError("Password must be at least 8 characters long.");
      }

      const alreadyExistingEmail = await Prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (alreadyExistingEmail) {
        throw new GraphQLError("Email Already Exists");
      }
      const alreadyExistingPhoneNo = await Prisma.user.findUnique({
        where: {
          phoneNumber: phoneNo,
        },
      });
      if (alreadyExistingPhoneNo) {
        throw new GraphQLError("Phone no Already Exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await Prisma.user.create({
        data: {
          name,
          email,
          phoneNumber: phoneNo,
          role,
          password: hashedPassword,
        },
      });

      return "User regiter successfully";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }

  @Mutation(() => AuthResponse)
  async LoginWithEmail(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    try {
      if (!email || !password) {
        throw new GraphQLError("Please add email and password");
      }

      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new GraphQLError("Please provide a valid email address.");
        }
      }
      if (password.length < 8) {
        throw new GraphQLError("Password must be at least 8 characters long.");
      }
      const user = await Prisma.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new GraphQLError("User Not Found!");
      }
      if (!user?.password) {
        throw new GraphQLError("Something went wrong");
      }
      const checkpassword = await bcrypt.compare(password, user.password);
      if (!checkpassword) {
        throw new GraphQLError("Wrong password");
      }
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      if (refreshToken) {
        await Prisma.user.update({
          where: {
            email,
          },
          data: {
            refreshToken,
          },
        });
      }
      return { accessToken, refreshToken, user };
    } catch (error) {
      console.log("Error While login", error);

      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }

  @Mutation(() => AuthResponse)
  async LoginWithPhoneNo(
    @Arg("phoneNo") phoneNo: string,
    @Arg("userOtp", { nullable: true }) userOtp: string
  ) {
    try {
      if (!phoneNo) {
        throw new GraphQLError("Please add phone no");
      }
      if (phoneNo) {
        const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
        if (!phoneRegex.test(phoneNo)) {
          throw new GraphQLError("The phone number is not valid.");
        }
      }
      const user = await Prisma.user.findUnique({
        where: {
          phoneNumber: phoneNo,
        },
      });
      if (user.phoneNumber !== phoneNo) {
        throw new GraphQLError("User Not Found!");
      }
      if (!userOtp) {
        const generateOTP = Math.floor(1000 + Math.random() * 9000).toString();
        await Prisma.user.updateMany({
          where: {
            phoneNumber: phoneNo,
          },
          data: {
            otp: generateOTP,
            otpExpire: new Date(Date.now() + 5 * 60 * 1000),
          },
        });

        return "Otp Sent on Your Mobile";
      }
      if (userOtp.length < 4) {
        throw new GraphQLError("Otp must be 4 digits long!");
      }
      if (user.otpExpire && user.otpExpire < new Date()) {
        throw new GraphQLError("OTP has expired. Please request a new OTP.");
      }
      if (user.otp !== userOtp) {
        throw new GraphQLError("Wrong Otp");
      }

      await Prisma.user.updateMany({
        where: {
          phoneNumber: phoneNo,
        },
        data: {
          otp: null,
          otpExpire: null,
        },
      });
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      return { accessToken, refreshToken, user };
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }

  @Mutation(() => String)
  async sentResetPasswordOtp(@Arg("email") email: string) {
    try {
      if (!email) {
        throw new GraphQLError("Please add email");
      }
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new GraphQLError("Please provide a valid email address.");
        }
      }
      const user = await Prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        throw new GraphQLError("User Not Found!");
      }

      const generateToken = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      await Prisma.user.updateMany({
        where: {
          email,
        },
        data: {
          resetPasswordToken: generateToken,
          resetPasswordTokenExpire: new Date(Date.now() + 5 * 60 * 1000),
        },
      });
      sendResetPasswordOtp(email, generateToken);
      return "Reset Password Token Sent on Your Email";
    } catch (error) {
      console.error("Error while Reset Password".toUpperCase(), error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  async resetPassword(
    @Arg("token", { nullable: true }) token: string,
    @Arg("newPassword", { nullable: true }) newPassword: string
  ) {
    try {
      if (token.length < 6) {
        throw new GraphQLError("Otp must be 6 digits long!");
      }
      console.log("OTP", token);

      const user = await Prisma.user.findFirst({
        where: {
          resetPasswordToken: token,
          resetPasswordTokenExpire: {
            gt: new Date(),
          },
        },
      });
      console.log("User", user);
      console.log("user", user?.email);

      if (!user) {
        throw new GraphQLError("Wrong or expired otp");
      }
      if (!newPassword) {
        return "Please enter a new password.";
      }
      if (newPassword.length < 8) {
        throw new GraphQLError("Password must be at least 8 characters long.");
      }
      if (user.resetPasswordToken === token) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await Prisma.user.updateMany({
          where: {
            resetPasswordToken: token,
          },
          data: {
            password: hashedPassword,
            resetPasswordToken: null,
            resetPasswordTokenExpire: null,
          },
        });
      }
      return "Password Changed!";
    } catch (error) {
      console.error("Error while Reset Password".toUpperCase(), error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async changePassword(
    @Arg("currentPassword") currentPassword: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() context: Context
  ) {
    try {
      if (!currentPassword) {
        throw new GraphQLError("Add current password");
      }
      if (!newPassword) {
        throw new GraphQLError("Add new password");
      }
      const userId = context.payload?.userId;
      const user = await Prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user) {
        throw new GraphQLError("user not found");
      }
      const isCorrectPassword = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isCorrectPassword) {
        throw new GraphQLError("incorrect password");
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          password: hashedNewPassword,
        },
      });
      return "Password Changed";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
}
