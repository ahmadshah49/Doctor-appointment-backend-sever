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
exports.DoctorAvailabilityResvolver = void 0;
const date_fns_1 = require("date-fns");
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
const SendAppointmentCancelEmail_1 = require("../../utils/SendAppointmentCancelEmail");
const Validation_1 = require("../../validations/Validation");
let DoctorAvailabilityResvolver = class DoctorAvailabilityResvolver {
    async AddDoctorAvailability(context, startTime, endTime, isBooked) {
        try {
            if (!startTime) {
                throw new graphql_1.GraphQLError("Please add availability start time");
            }
            if (!endTime) {
                throw new graphql_1.GraphQLError("Please add availability end time");
            }
            if (new Date(startTime) >= new Date(endTime)) {
                throw new graphql_1.GraphQLError("Start time must be before end time");
            }
            (0, Validation_1.InvalidDateTime)({ startTime, endTime });
            const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
            const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
            if (parsedStartTime.getTime() === parsedEndTime.getTime() &&
                parsedStartTime >= parsedEndTime) {
                throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
            }
            const currentUserId = context.payload.userId;
            const doctor = await prisma_1.default.doctor.findUnique({
                where: { userId: currentUserId },
            });
            if (!doctor) {
                throw new graphql_1.GraphQLError("Doctor not found");
            }
            const existingAvailabilitySlot = await prisma_1.default.availabilitySlot.findUnique({
                where: {
                    doctorId: currentUserId,
                },
            });
            if (existingAvailabilitySlot) {
                throw new graphql_1.GraphQLError("Availability slot already exists for this doctor. Please update the existing slot instead of creating a new one.");
            }
            await prisma_1.default.availabilitySlot.create({
                data: {
                    startTime: parsedStartTime,
                    endTime: parsedEndTime,
                    doctorId: currentUserId,
                },
            });
            return "Availability Slot Added";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "an unexpected error occurred");
        }
    }
    async updateDoctorAvailability(context, startTime, endTime, isBooked) {
        try {
            if (!startTime) {
                throw new graphql_1.GraphQLError("Please add availability start time");
            }
            if (!endTime) {
                throw new graphql_1.GraphQLError("Please add availability end time");
            }
            if (new Date(startTime) >= new Date(endTime)) {
                throw new graphql_1.GraphQLError("Start time must be before end time");
            }
            (0, Validation_1.InvalidDateTime)({ startTime, endTime });
            const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
            const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
            const currentUserId = context.payload.userId;
            const doctor = await prisma_1.default.doctor.findUnique({
                where: { userId: currentUserId },
            });
            if (!doctor) {
                throw new graphql_1.GraphQLError("Doctor not found");
            }
            await prisma_1.default.availabilitySlot.update({
                where: {
                    doctorId: currentUserId,
                },
                data: {
                    startTime: parsedStartTime,
                    endTime: parsedEndTime,
                    doctorId: currentUserId,
                },
            });
            return "availabilitySlot Updated";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "an unexpected error occurred");
        }
    }
    async addDoctorUnavailability(context, doctorId, startTime, endTime, startDate, endDate, reason, isAvailable) {
        try {
            if (!doctorId || !startTime || !endTime) {
                throw new graphql_1.GraphQLError("Please Add doctor id ,start time and end time");
            }
            if (new Date(startDate) >= new Date(endDate)) {
                throw new graphql_1.GraphQLError("Start date must be before end date");
            }
            if (new Date(startTime) >= new Date(endTime)) {
                throw new graphql_1.GraphQLError("Start time must be before end time");
            }
            (0, Validation_1.InvalidDateTime)({ startTime, endTime, startDate, endDate });
            const currentUserId = context.payload?.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            const existingUnavailabilitySlot = await prisma_1.default.unavailabilitySlot.findUnique({
                where: {
                    doctorId: currentUserId,
                },
            });
            if (existingUnavailabilitySlot) {
                throw new graphql_1.GraphQLError("Unavailability slot already exists for this doctor. Please update the existing slot instead of creating a new one.");
            }
            const parsedStartDate = (0, date_fns_1.parseISO)(startDate);
            const parsedEndDate = (0, date_fns_1.parseISO)(endDate);
            const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
            const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
            (0, Validation_1.DateNotinPastforDoctor)({
                startTime: parsedStartTime,
                startDate: parsedStartDate,
                endDate: parsedEndDate,
                endTime: parsedEndTime,
            });
            await prisma_1.default.unavailabilitySlot.create({
                data: {
                    endTime: parsedEndTime,
                    startTime: parsedStartTime,
                    doctorId,
                    startDate: parsedStartDate,
                    endDate: parsedEndDate,
                    isAvailable,
                    reason,
                },
            });
            const affectedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId,
                    scheduledDate: {
                        gte: parsedStartDate,
                        lte: parsedEndDate,
                    },
                    status: "UPCOMING",
                },
            });
            for (const appointment of affectedAppointments) {
                await prisma_1.default.appointment.update({
                    where: { id: appointment.id },
                    data: { status: "CANCELLED" },
                });
                (0, SendAppointmentCancelEmail_1.sendAppointmentCancelEmail)(appointment.email, appointment.scheduledDate, appointment.fullName);
            }
            return "Unavailability Added";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "an unexpected error occurred");
        }
    }
    async updateDoctorUnavailability(context, doctorId, startTime, endTime, startDate, endDate, reason, isAvailable) {
        try {
            if (!doctorId || !startTime || !endTime) {
                throw new graphql_1.GraphQLError("Please Add doctor id ,start time and end time");
            }
            if (new Date(startDate) >= new Date(endDate)) {
                throw new graphql_1.GraphQLError("Start date must be before end time");
            }
            if (new Date(startTime) >= new Date(endTime)) {
                throw new graphql_1.GraphQLError("Start time must be before end date");
            }
            (0, Validation_1.InvalidDateTime)({ startTime, endTime, startDate, endDate });
            const parsedStartDate = (0, date_fns_1.parseISO)(startDate);
            const parsedEndDate = (0, date_fns_1.parseISO)(endDate);
            const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
            const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
            (0, Validation_1.DateNotinPastforDoctor)({
                startTime: parsedStartTime,
                startDate: parsedStartDate,
                endDate: parsedEndDate,
                endTime: parsedEndTime,
            });
            const currentUserId = context.payload.userId;
            if (!currentUserId) {
                throw new graphql_1.GraphQLError("User not found");
            }
            await prisma_1.default.unavailabilitySlot.update({
                where: {
                    doctorId: currentUserId,
                },
                data: {
                    endTime: parsedEndTime,
                    startTime: parsedStartTime,
                    doctorId,
                    startDate: parsedStartDate,
                    endDate: parsedEndDate,
                    isAvailable,
                    reason,
                },
            });
            const affectedAppointments = await prisma_1.default.appointment.findMany({
                where: {
                    doctorId,
                    scheduledDate: {
                        gte: parsedStartDate,
                        lte: parsedEndDate,
                    },
                    status: "UPCOMING",
                },
            });
            for (const appointment of affectedAppointments) {
                await prisma_1.default.appointment.update({
                    where: { id: appointment.id },
                    data: { status: "CANCELLED" },
                });
                (0, SendAppointmentCancelEmail_1.sendAppointmentCancelEmail)(appointment.email, appointment.scheduledDate, appointment.fullName);
            }
            return "Unavailability Updated";
        }
        catch (error) {
            throw new graphql_1.GraphQLError(error.message || "an unexpected error occurred");
        }
    }
};
exports.DoctorAvailabilityResvolver = DoctorAvailabilityResvolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("startTime")),
    __param(2, (0, type_graphql_1.Arg)("endTime")),
    __param(3, (0, type_graphql_1.Arg)("isBooked", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorAvailabilityResvolver.prototype, "AddDoctorAvailability", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("startTime")),
    __param(2, (0, type_graphql_1.Arg)("endTime")),
    __param(3, (0, type_graphql_1.Arg)("isBooked", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorAvailabilityResvolver.prototype, "updateDoctorAvailability", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("doctorId")),
    __param(2, (0, type_graphql_1.Arg)("startTime")),
    __param(3, (0, type_graphql_1.Arg)("endTime")),
    __param(4, (0, type_graphql_1.Arg)("startDate", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("endDate", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("reason", { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, String, String, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorAvailabilityResvolver.prototype, "addDoctorUnavailability", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("doctorId")),
    __param(2, (0, type_graphql_1.Arg)("startTime")),
    __param(3, (0, type_graphql_1.Arg)("endTime")),
    __param(4, (0, type_graphql_1.Arg)("startDate", { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("endDate", { nullable: true })),
    __param(6, (0, type_graphql_1.Arg)("reason", { nullable: true })),
    __param(7, (0, type_graphql_1.Arg)("isAvailable", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, String, String, String, String, Boolean]),
    __metadata("design:returntype", Promise)
], DoctorAvailabilityResvolver.prototype, "updateDoctorUnavailability", null);
exports.DoctorAvailabilityResvolver = DoctorAvailabilityResvolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.AvailabilitySlot)
], DoctorAvailabilityResvolver);
