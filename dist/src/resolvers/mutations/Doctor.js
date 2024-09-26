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
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const MiddleWare_1 = require("../../middleware/MiddleWare");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const graphql_1 = require("graphql");
const ImageUploader_1 = require("../../utils/ImageUploader");
const date_fns_1 = require("date-fns");
let DoctorResolver = class DoctorResolver {
    async allDoctor() {
        try {
            const doctor = await prisma_1.default.doctor.findMany({
                include: {
                    AvailabilitySlot: true,
                },
            });
            console.log("Doctor", doctor);
            return doctor;
        }
        catch (error) {
            console.log("Error While Getting doctors", error);
            throw new graphql_1.GraphQLError("Error While Getting doctors");
        }
    }
    async createDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        const currentUserId = context.payload?.userId;
        const dbUser = await prisma_1.default.doctor.findUnique({
            where: {
                userId: currentUserId,
            },
        });
        if (dbUser) {
            throw new graphql_1.GraphQLError("It looks like you’ve already set up your Doctor information. You can update your details instead of creating new ones.");
        }
        await prisma_1.default.doctor.create({
            data: {
                address,
                email,
                gender,
                name,
                availability,
                isAvailable,
                profilePhoto,
                userId: currentUserId,
            },
        });
        return "Data Added";
    }
    async updateDoctor(name, profilePhoto, address, availability, email, isAvailable, gender, context) {
        const currentUserId = context.payload?.userId;
        const addProfileImage = await (0, ImageUploader_1.ImageUploader)(profilePhoto);
        await prisma_1.default.doctor.update({
            where: {
                userId: currentUserId,
            },
            data: {
                address,
                email,
                gender,
                name,
                availability,
                isAvailable,
                profilePhoto: addProfileImage || null,
                userId: currentUserId,
            },
        });
        return "Data Updated";
    }
    async AddDoctorAvailability(context, startDate, endDate, startTime, endTime, isBooked) {
        if (!startDate) {
            throw new graphql_1.GraphQLError("Please add an availability start day");
        }
        if (!endDate) {
            throw new graphql_1.GraphQLError("Please add an availability end day");
        }
        if (!startTime) {
            throw new graphql_1.GraphQLError("Please add availability start time");
        }
        if (!endTime) {
            throw new graphql_1.GraphQLError("Please add availability end time");
        }
        if (new Date(startDate) >= new Date(endDate)) {
            throw new graphql_1.GraphQLError("Start date must be before end date");
        }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end time");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startDate))) {
            throw new graphql_1.GraphQLError("Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endDate))) {
            throw new graphql_1.GraphQLError("Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        const parsedStartDate = (0, date_fns_1.parseISO)(startDate);
        const parsedEndDate = (0, date_fns_1.parseISO)(endDate);
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        // Check that startDate is not after endDate
        if (parsedStartDate > parsedEndDate) {
            throw new graphql_1.GraphQLError("Start date must be before or equal to end date.");
        }
        // Check that startTime is not after endTime on the same day
        if (parsedStartDate.getTime() === parsedEndDate.getTime() &&
            parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        const currentUserId = context.payload.userId;
        console.log("currentUserId", currentUserId);
        const doctor = await prisma_1.default.doctor.findUnique({
            where: { userId: currentUserId },
        });
        console.log("Doctor Id", doctor.userId);
        if (!doctor) {
            throw new graphql_1.GraphQLError("Doctor not found");
        }
        await prisma_1.default.availabilitySlot.create({
            data: {
                startDate: parsedStartDate,
                endDate: parsedEndDate,
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                isBooked: isBooked ?? false,
                doctorId: currentUserId,
            },
        });
        return "availabilitySlot Added";
    }
    async updateDoctorAvailability(context, startDate, endDate, startTime, endTime, isBooked) {
        if (!startDate) {
            throw new graphql_1.GraphQLError("Please add an availability start day");
        }
        if (!endDate) {
            throw new graphql_1.GraphQLError("Please add an availability end day");
        }
        if (!startTime) {
            throw new graphql_1.GraphQLError("Please add availability start time");
        }
        if (!endTime) {
            throw new graphql_1.GraphQLError("Please add availability end time");
        }
        if (new Date(startDate) >= new Date(endDate)) {
            throw new graphql_1.GraphQLError("Start date must be before end date");
        }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end time");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startDate))) {
            throw new graphql_1.GraphQLError("Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endDate))) {
            throw new graphql_1.GraphQLError("Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        const parsedStartDate = (0, date_fns_1.parseISO)(startDate);
        const parsedEndDate = (0, date_fns_1.parseISO)(endDate);
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        // Check that startDate is not after endDate
        if (parsedStartDate > parsedEndDate) {
            throw new graphql_1.GraphQLError("Start date must be before or equal to end date.");
        }
        // Check that startTime is not after endTime on the same day
        if (parsedStartDate.getTime() === parsedEndDate.getTime() &&
            parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        const currentUserId = context.payload.userId;
        console.log("currentUserId", currentUserId);
        const doctor = await prisma_1.default.doctor.findUnique({
            where: { userId: currentUserId },
        });
        console.log("Doctor Id", doctor.userId);
        if (!doctor) {
            throw new graphql_1.GraphQLError("Doctor not found");
        }
        await prisma_1.default.availabilitySlot.update({
            where: {
                doctorId: currentUserId,
            },
            data: {
                startDate: parsedStartDate,
                endDate: parsedEndDate,
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                isBooked: isBooked ?? false,
                doctorId: currentUserId,
            },
        });
        return "availabilitySlot Added";
    }
};
exports.DoctorResolver = DoctorResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [type_graphql_2.Doctor]),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "allDoctor", null);
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
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("startDate")),
    __param(2, (0, type_graphql_1.Arg)("endDate")),
    __param(3, (0, type_graphql_1.Arg)("startTime")),
    __param(4, (0, type_graphql_1.Arg)("endTime")),
    __param(5, (0, type_graphql_1.Arg)("isBooked", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "AddDoctorAvailability", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("startDate")),
    __param(2, (0, type_graphql_1.Arg)("endDate")),
    __param(3, (0, type_graphql_1.Arg)("startTime")),
    __param(4, (0, type_graphql_1.Arg)("endTime")),
    __param(5, (0, type_graphql_1.Arg)("isBooked", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorResolver.prototype, "updateDoctorAvailability", null);
exports.DoctorResolver = DoctorResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Doctor)
], DoctorResolver);
