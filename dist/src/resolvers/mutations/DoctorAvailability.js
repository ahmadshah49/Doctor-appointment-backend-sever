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
let DoctorAvailabilityResvolver = class DoctorAvailabilityResvolver {
    async AddDoctorAvailability(context, startTime, endTime, isBooked) {
        // if (!startDate) {
        //   throw new GraphQLError("Please add an availability start day");
        // }
        // if (!endDate) {
        //   throw new GraphQLError("Please add an availability end day");
        // }
        if (!startTime) {
            throw new graphql_1.GraphQLError("Please add availability start time");
        }
        if (!endTime) {
            throw new graphql_1.GraphQLError("Please add availability end time");
        }
        // if (new Date(startDate) >= new Date(endDate)) {
        //   throw new GraphQLError("Start date must be before end date");
        // }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end time");
        }
        // if (!isValid(parseISO(startDate))) {
        //   throw new GraphQLError(
        //     "Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
        //   );
        // }
        // if (!isValid(parseISO(endDate))) {
        //   throw new GraphQLError(
        //     "Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
        //   );
        // }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        // const parsedStartDate = parseISO(startDate);
        // const parsedEndDate = parseISO(endDate);
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        // const startHour = parsedStartTime.getUTCHours();
        // const startMinutes = parsedStartTime.getMinutes();
        // const endHour = parsedEndTime.getUTCHours();
        // const endMinutes = parsedEndTime.getMinutes();
        // const formattedStartTime = `${startHour}:${startMinutes}`;
        // const formattedEndTime = `${endHour}:${endMinutes}`;
        // Check that startDate is not after endDate
        // if (parsedStartDate > parsedEndDate) {
        //   throw new GraphQLError("Start date must be before or equal to end date.");
        // }
        // Check that startTime is not after endTime on the same day
        if (parsedStartTime.getTime() === parsedEndTime.getTime() &&
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
                // startDate: parsedStartDate,
                // endDate: parsedEndDate,
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                isBooked: isBooked ?? false,
                doctorId: currentUserId,
            },
        });
        return "Availability Slot Added";
    }
    async updateDoctorAvailability(context, startTime, endTime, isBooked) {
        // if (!startDate) {
        //   throw new GraphQLError("Please add an availability start day");
        // }
        // if (!endDate) {
        //   throw new GraphQLError("Please add an availability end day");
        // }
        if (!startTime) {
            throw new graphql_1.GraphQLError("Please add availability start time");
        }
        if (!endTime) {
            throw new graphql_1.GraphQLError("Please add availability end time");
        }
        // if (new Date(startDate) >= new Date(endDate)) {
        //   throw new GraphQLError("Start date must be before end date");
        // }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end time");
        }
        // if (!isValid(parseISO(startDate))) {
        //   throw new GraphQLError(
        //     "Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
        //   );
        // }
        // if (!isValid(parseISO(endDate))) {
        //   throw new GraphQLError(
        //     "Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
        //   );
        // }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        // const parsedStartDate = parseISO(startDate);
        // const parsedEndDate = parseISO(endDate);
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
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
                // startDate: parsedStartDate,
                // endDate: parsedEndDate,
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                isBooked: isBooked ?? false,
                doctorId: currentUserId,
            },
        });
        return "availabilitySlot Updated";
    }
    async addDoctorUnavailability(context, doctorId, startTime, endTime, startDate, endDate, reason, isAvailable) {
        if (!doctorId || !startTime || !endTime) {
            throw new graphql_1.GraphQLError("Please Add doctor id ,start time and end time");
        }
        if (new Date(startDate) >= new Date(endDate)) {
            throw new graphql_1.GraphQLError("Start date must be before end date");
        }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end date");
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
        const currentUserId = context.payload?.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const parsedStartDate = (0, date_fns_1.parseISO)(startDate);
        const parsedEndDate = (0, date_fns_1.parseISO)(endDate);
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
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
            return "Unavailability Added";
        }
    }
    async updateDoctorUnavailability(context, doctorId, startTime, endTime, startDate, endDate, reason, isAvailable) {
        if (!doctorId || !startTime || !endTime) {
            throw new graphql_1.GraphQLError("Please Add doctor id ,start time and end time");
        }
        if (new Date(startDate) >= new Date(endDate)) {
            throw new graphql_1.GraphQLError("Start date must be before end date");
        }
        if (new Date(startTime) >= new Date(endTime)) {
            throw new graphql_1.GraphQLError("Start time must be before end date");
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
            console.log("Doctor Email", appointment.email);
            await prisma_1.default.appointment.update({
                where: { id: appointment.id },
                data: { status: "CANCELLED" },
            });
            (0, SendAppointmentCancelEmail_1.sendAppointmentCancelEmail)(appointment.email, appointment.scheduledDate, appointment.fullName);
        }
        return "Unavailability Updated";
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
