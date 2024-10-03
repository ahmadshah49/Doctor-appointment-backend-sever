import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Context } from "../../context/Context";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth } from "../../middleware/MiddleWare";
import { ImageUploader } from "../../utils/ImageUploader";

@Resolver(() => Patient)
export class PatientResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async createPatient(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("email") email: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
  ) {
    try {
      if (context.payload.role !== "PATIENT") {
        throw new GraphQLError(
          "Your are not patient you can not register as a user"
        );
      }
      if (!phoneNo || !fullName || !age || !gender || !adress || !email) {
        throw new GraphQLError("Please add all fields");
      }
      const currentUserId = context.payload?.userId;
      const dbUser = await Prisma.patient.findUnique({
        where: {
          userId: currentUserId,
        },
      });
      if (dbUser) {
        throw new GraphQLError(
          "It looks like you’ve already set up your patient information. You can update your details instead of creating new ones."
        );
      }
      let imageUrl = null;
      if (profilePicture) {
        try {
          imageUrl = await ImageUploader(profilePicture);
        } catch (error) {
          throw new GraphQLError(
            "Error uploading profile picture: ",
            error.message
          );
        }
      }
      const user = await Prisma.patient.create({
        data: {
          address: adress,
          age: age,
          fullName: fullName,
          gender: gender,
          phoneNo: phoneNo,
          userId: currentUserId,
          email,
          profilePicture: imageUrl || null,
        },
      });

      return "Patient Created";
    } catch (error) {
      console.error("Error while creating patient".toUpperCase(), error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updatePatientInfo(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("email") email: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
  ) {
    try {
      if (!phoneNo || !fullName || !age || !gender || !adress || !email) {
        throw new GraphQLError("Please add all fields");
      }
      const currentUserId = context.payload?.userId;
      const addProfileImage = await ImageUploader(profilePicture);
      await Prisma.patient.update({
        where: {
          userId: currentUserId,
        },
        data: {
          address: adress,
          age: age,
          fullName: fullName,
          gender: gender,
          phoneNo: phoneNo,
          userId: currentUserId,
          profilePicture: addProfileImage || null,
        },
      });

      return "Patient Info Updated";
    } catch (error) {
      console.error("Error while updating patient info".toUpperCase(), error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
}
