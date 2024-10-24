"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.DoctorResolver = void 0;
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
const ImageUploader_1 = require("../../utils/ImageUploader");
let DoctorResolver = class DoctorResolver {
    async createDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        try {
            const currentUserId = context.payload?.userId;
            const dbUser = await prisma_1.default.doctor.findUnique({
                where: {
                    userId: currentUserId,
                },
            });
            if (dbUser) {
                throw new graphql_1.GraphQLError("It looks like you’ve already set up your Doctor information. You can update your details instead of creating new ones.");
            }
            let imageUrl = null;
            if (profilePhoto) {
                try {
                    imageUrl = await (0, ImageUploader_1.ImageUploader)(profilePhoto);
                }
                catch (error) {
                    throw new graphql_1.GraphQLError("Error uploading profile picture: ", error.message);
                }
            }
            await prisma_1.default.doctor.create({
                data: {
                    address,
                    email,
                    gender,
                    name,
                    profilePhoto: imageUrl || null,
                    userId: currentUserId,
                },
            });
            return "Data Added";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
    async updateDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        try {
            const currentUserId = context.payload?.userId;
            let imageUrl = null;
            if (profilePhoto) {
                try {
                    imageUrl = await (0, ImageUploader_1.ImageUploader)(profilePhoto);
                }
                catch (error) {
                    throw new graphql_1.GraphQLError("Error uploading profile picture: ", error.message);
                }
            }
            await prisma_1.default.doctor.update({
                where: {
                    userId: currentUserId,
                },
                data: {
                    address,
                    email,
                    gender,
                    name,
                    profilePhoto: imageUrl || null,
                    userId: currentUserId,
                },
            });
            return "Data Updated";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "An unexpected error occurred.");
        }
    }
};
exports.DoctorResolver = DoctorResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __param(1, (0, type_graphql_1.Arg)("profilePhoto", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("address")),
    __param(3, (0, type_graphql_1.Arg)("availability", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("email")),
    __param(5, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender)),
    __param(7, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Boolean, String, Object]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "createDoctor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("name", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("profilePhoto", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("address", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("availability", { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("email", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender, { nullable: true })),
    __param(7, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Boolean, String, Object]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "updateDoctor", null);
exports.DoctorResolver = DoctorResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Doctor)
], DoctorResolver);
