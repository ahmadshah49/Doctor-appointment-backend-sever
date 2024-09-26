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
exports.PatientResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
const graphql_1 = require("graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const ImageUploader_1 = require("../../utils/ImageUploader");
let PatientResolver = class PatientResolver {
    async createPatient(phoneNo, fullName, age, gender, adress, profilePicture, context) {
        if (!phoneNo || !fullName || !age || !gender || !adress) {
            throw new graphql_1.GraphQLError("Please add all fields");
        }
        const currentUserId = context.payload?.userId;
        const dbUser = await prisma_1.default.patient.findUnique({
            where: {
                userId: currentUserId,
            },
        });
        if (dbUser) {
            throw new graphql_1.GraphQLError("It looks like you’ve already set up your patient information. You can update your details instead of creating new ones.");
        }
        let imageUrl = null;
        if (profilePicture) {
            try {
                imageUrl = await (0, ImageUploader_1.ImageUploader)(profilePicture);
            }
            catch (error) {
                throw new graphql_1.GraphQLError("Error uploading profile picture: ", error.message);
            }
        }
        const user = await prisma_1.default.patient.create({
            data: {
                address: adress,
                age: age,
                fullName: fullName,
                gender: gender,
                phoneNo: phoneNo,
                userId: currentUserId,
                profilePicture: imageUrl || null,
            },
        });
        return "Patient Created";
    }
    async updatePatientInfo(phoneNo, fullName, age, gender, adress, profilePicture, context) {
        if (!phoneNo || !fullName || !age || !gender || !adress) {
            throw new graphql_1.GraphQLError("Please add all fields");
        }
        const currentUserId = context.payload?.userId;
        const addProfileImage = await (0, ImageUploader_1.ImageUploader)(profilePicture);
        await prisma_1.default.patient.update({
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
    }
    async createAppointment(fullName, email, age, gender, phoneNo, address, medicalHistory, presciptions, details, scheduledDate, startTime, endTime, doctorId, context
    // @Arg("patientId") patientId: number
    ) {
        if (!fullName ||
            !email ||
            !age ||
            !gender ||
            !phoneNo ||
            !address ||
            !presciptions ||
            !scheduledDate ||
            !startTime ||
            !endTime) {
            throw new graphql_1.GraphQLError("Please add all required Fields");
        }
        if (context.payload.role !== "PATIENT") {
            throw new graphql_1.GraphQLError("You are not patient so you can't di this action");
        }
        console.log("User Role", context.payload.role);
        const currentUserId = context.payload.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        console.log("Doctor id", doctorId);
        console.log("Current User Id", currentUserId);
        const checkDoctorId = await prisma_1.default.doctor.findUnique({
            where: { userId: doctorId },
        });
        console.log("Doctor Id", checkDoctorId.id);
        console.log("Doctor", checkDoctorId);
        if (!checkDoctorId) {
            throw new graphql_1.GraphQLError("Doctor not found!");
        }
        await prisma_1.default.appointment.create({
            data: {
                address,
                age,
                email,
                fullName,
                gender,
                phoneNo,
                details,
                presciptions,
                startTime,
                endTime,
                scheduledDate,
                patientId: currentUserId,
                doctorId,
            },
        });
        return "Appointment Added";
    }
};
exports.PatientResolver = PatientResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("phoneNo")),
    __param(1, (0, type_graphql_1.Arg)("fullName")),
    __param(2, (0, type_graphql_1.Arg)("age")),
    __param(3, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender)),
    __param(4, (0, type_graphql_1.Arg)("address")),
    __param(5, (0, type_graphql_1.Arg)("profilePicture", { nullable: true })),
    __param(6, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "createPatient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("phoneNo", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("fullName", { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("age", { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender, { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("address", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("profilePicture", { nullable: true })),
    __param(6, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "updatePatientInfo", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("fullName")),
    __param(1, (0, type_graphql_1.Arg)("email")),
    __param(2, (0, type_graphql_1.Arg)("age")),
    __param(3, (0, type_graphql_1.Arg)("gender", () => type_graphql_2.gender)),
    __param(4, (0, type_graphql_1.Arg)("phoneNo")),
    __param(5, (0, type_graphql_1.Arg)("address")),
    __param(6, (0, type_graphql_1.Arg)("medicalHistory", { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)("presciptions", () => [String], { nullable: true })),
    __param(8, (0, type_graphql_1.Arg)("details", { nullable: true })),
    __param(9, (0, type_graphql_1.Arg)("scheduledDate")),
    __param(10, (0, type_graphql_1.Arg)("startTime")),
    __param(11, (0, type_graphql_1.Arg)("endTime")),
    __param(12, (0, type_graphql_1.Arg)("doctorId")),
    __param(13, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Array, String, Date,
        Date,
        Date, Number, Object]),
    __metadata("design:returntype", Promise)
], PatientResolver.prototype, "createAppointment", null);
exports.PatientResolver = PatientResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Patient)
], PatientResolver);
