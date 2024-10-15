"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const bcrypt = __importStar(require("bcryptjs"));
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
const GenerateJwt_1 = require("../../utils/GenerateJwt");
const SendResetPassword_1 = require("../../utils/SendResetPassword");
let AuthResolver = class AuthResolver {
    async registerUser(name, email, phoneNo, password, role) {
        try {
            if (!name || !password || !email || !phoneNo || !role) {
                throw new graphql_1.GraphQLError("Please fill all fields");
            }
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    throw new graphql_1.GraphQLError("Please provide a valid email address.");
                }
            }
            if (phoneNo) {
                if (phoneNo) {
                    const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
                    if (!phoneRegex.test(phoneNo)) {
                        throw new graphql_1.GraphQLError("The phone number is not valid.");
                    }
                }
            }
            if (password.length < 8) {
                throw new graphql_1.GraphQLError("Password must be at least 8 characters long.");
            }
            const alreadyExistingEmail = await prisma_1.default.user.findUnique({
                where: {
                    email,
                },
            });
            if (alreadyExistingEmail) {
                throw new graphql_1.GraphQLError("Email Already Exists");
            }
            const alreadyExistingPhoneNo = await prisma_1.default.user.findUnique({
                where: {
                    phoneNumber: phoneNo,
                },
            });
            if (alreadyExistingPhoneNo) {
                throw new graphql_1.GraphQLError("Phone no Already Exists");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await prisma_1.default.user.create({
                data: {
                    name,
                    email,
                    phoneNumber: phoneNo,
                    role,
                    password: hashedPassword,
                },
            });
            return "User regiter successfully";
        }
        catch (error) {
            console.error("Error while resgister the user".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async LoginWithEmail(email, password) {
        try {
            if (!email || !password) {
                throw new graphql_1.GraphQLError("Please add email and password");
            }
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    throw new graphql_1.GraphQLError("Please provide a valid email address.");
                }
            }
            if (password.length < 8) {
                throw new graphql_1.GraphQLError("Password must be at least 8 characters long.");
            }
            const user = await prisma_1.default.user.findUnique({
                where: { email },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("User Not Found!");
            }
            if (!user.password) {
                throw new graphql_1.GraphQLError("Something went wrong");
            }
            const checkpassword = await bcrypt.compare(password, user.password);
            if (!checkpassword) {
                throw new graphql_1.GraphQLError("Wrong password");
            }
            return (0, GenerateJwt_1.generatJwt)(user);
        }
        catch (error) {
            console.error("Error while Login with email".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async LoginWithPhoneNo(phoneNo, userOtp) {
        try {
            if (!phoneNo) {
                throw new graphql_1.GraphQLError("Please add phone no");
            }
            if (phoneNo) {
                const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
                if (!phoneRegex.test(phoneNo)) {
                    throw new graphql_1.GraphQLError("The phone number is not valid.");
                }
            }
            const user = await prisma_1.default.user.findUnique({
                where: {
                    phoneNumber: phoneNo,
                },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("User Not Found!");
            }
            if (!userOtp) {
                const generateOTP = Math.floor(1000 + Math.random() * 9000).toString();
                await prisma_1.default.user.updateMany({
                    where: {
                        phoneNumber: phoneNo,
                    },
                    data: {
                        otp: generateOTP,
                        otpExpire: new Date(Date.now() + 5 * 60 * 1000),
                    },
                });
                console.log(`Phone No is: ${phoneNo} otp is: ${generateOTP}`);
                return "Otp Sent on Your Mobile";
            }
            if (userOtp.length < 4) {
                throw new graphql_1.GraphQLError("Otp Must be 4 Digts Long!");
            }
            if (user.otpExpire && user.otpExpire < new Date()) {
                throw new graphql_1.GraphQLError("OTP has expired. Please request a new OTP.");
            }
            if (user.otp !== userOtp) {
                throw new graphql_1.GraphQLError("Wrong Otp");
            }
            await prisma_1.default.user.updateMany({
                where: {
                    phoneNumber: phoneNo,
                },
                data: {
                    otp: null,
                    otpExpire: null,
                },
            });
            return (0, GenerateJwt_1.generatJwt)(user);
        }
        catch (error) {
            console.error("Error while loging with phone no".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async resetPassword(email, token, newPassword) {
        try {
            if (!email) {
                throw new graphql_1.GraphQLError("Please add email");
            }
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    throw new graphql_1.GraphQLError("Please provide a valid email address.");
                }
            }
            const user = await prisma_1.default.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("User Not Found!");
            }
            if (!token) {
                const generateToken = Math.floor(100000 + Math.random() * 900000).toString();
                await prisma_1.default.user.updateMany({
                    where: {
                        email,
                    },
                    data: {
                        resetPasswordToken: generateToken,
                        resetPasswordTokenExpire: new Date(Date.now() + 5 * 60 * 1000),
                    },
                });
                (0, SendResetPassword_1.sendResetPasswordOtp)(email, generateToken);
                return "Reset Password Token Sent on Your Email";
            }
            if (token.length < 6) {
                throw new graphql_1.GraphQLError("Otp Must be 6 Digts Long!");
            }
            if (user.tokenExpire && user.tokenExpire < new Date()) {
                throw new graphql_1.GraphQLError("OTP has expired. Please request a new OTP.");
            }
            if (user.token !== token) {
                throw new graphql_1.GraphQLError("Wrong Otp");
            }
            if (user.token === token) {
                if (!newPassword) {
                    throw new graphql_1.GraphQLError("Enter New Password");
                }
                if (newPassword.length < 8) {
                    throw new graphql_1.GraphQLError("Password must be at least 8 characters long.");
                }
                if (user.token === token) {
                    const hashedPassword = await bcrypt.hash(newPassword, 10);
                    await prisma_1.default.user.update({
                        where: {
                            email,
                        },
                        data: {
                            password: hashedPassword,
                            resetPasswordToken: null,
                            resetPasswordTokenExpire: null,
                        },
                    });
                    return "Password Changed!";
                }
            }
            return "Password Changed you can login with your new Pasword";
        }
        catch (error) {
            console.error("Error while Reset Password".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async changePassword(currentPassword, newPassword, context) {
        try {
            if (!currentPassword) {
                throw new graphql_1.GraphQLError("Add current password");
            }
            if (!newPassword) {
                throw new graphql_1.GraphQLError("Add new password");
            }
            const userId = context.payload?.userId;
            const user = await prisma_1.default.user.findUnique({
                where: {
                    id: userId,
                },
            });
            if (!user) {
                throw new graphql_1.GraphQLError("user not found");
            }
            const isCorrectPassword = await bcrypt.compare(currentPassword, user.password);
            if (!isCorrectPassword) {
                throw new graphql_1.GraphQLError("incorrect password");
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
        }
        catch (error) {
            console.error("Error while changing password".toUpperCase(), error);
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("email", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("phoneNo", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("password")),
    __param(4, (0, type_graphql_1.Arg)("role", () => type_graphql_2.role, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "registerUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "LoginWithEmail", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("phoneNo")),
    __param(1, (0, type_graphql_1.Arg)("userOtp")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "LoginWithPhoneNo", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("email", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("token", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("newPassword", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("currentPassword")),
    __param(1, (0, type_graphql_1.Arg)("newPassword")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "changePassword", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.User)
], AuthResolver);
