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
exports.AppointmentResolver = void 0;
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
const moment_1 = __importDefault(require("moment"));
const date_fns_1 = require("date-fns");
let AppointmentResolver = class AppointmentResolver {
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
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        if (parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        if (context.payload.role !== "PATIENT") {
            throw new graphql_1.GraphQLError("You are not patient so you can't di this action");
        }
        console.log("User Role", context.payload?.role);
        const currentUserId = context.payload?.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const checkDoctorId = await prisma_1.default.doctor.findUnique({
            where: { userId: doctorId },
        });
        if (!checkDoctorId) {
            throw new graphql_1.GraphQLError("Doctor not found!");
        }
        const checkDoctorAvailability = await prisma_1.default.availabilitySlot.findFirst({
            where: {
                doctorId: doctorId,
            },
        });
        if (!checkDoctorAvailability) {
            throw new graphql_1.GraphQLError("Doctor availability not found!");
        }
        const doctorStartTime = (0, moment_1.default)(checkDoctorAvailability?.startTime).format("HH:mm:ss");
        const doctorEndTime = (0, moment_1.default)(checkDoctorAvailability?.endTime).format("HH:mm:ss");
        const appointmentScheduleDate = (0, moment_1.default)(scheduledDate).format("YYYY-MM-DD");
        const appointmentStartTime = (0, moment_1.default)(startTime).format("HH:mm:ss");
        const appointmentEndTime = (0, moment_1.default)(endTime).format("HH:mm:ss");
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        console.log("appointmentScheduleDate", appointmentScheduleDate);
        const doctorAppointments = await prisma_1.default.appointment.findMany({
            where: {
                doctorId,
                scheduledDate,
                OR: [
                    // Case 1: New appointment starts during an existing appointment
                    {
                        startTime: {
                            lte: endTime, // Existing appointment starts before or when the new one ends.
                        },
                        endTime: {
                            gte: startTime, // Existing appointment ends after or when the new one starts.
                        },
                    },
                    // Case 2: New appointment completely surrounds an existing one
                    {
                        startTime: {
                            gte: startTime, // Existing appointment starts after or when the new one starts.
                        },
                        endTime: {
                            lte: endTime, // Existing appointment ends before or when the new one ends.
                        },
                    },
                ],
            },
        });
        if (doctorAppointments.length > 0) {
            throw new graphql_1.GraphQLError(" The selected time slot is already booked by another patient. Please select a different time.");
        }
        // for (const appointment of doctorAppointments) {
        //   const existingAppointmentDate = moment(
        //     doctorAppointments?.scheduledDate
        //   ).format("YYYY-MM-DD");
        //   const existingAppointmentStartTime = moment(
        //     doctorAppointments?.startTime
        //   ).format("HH:mm:ss");
        //   const existingAppointmentEndTime = moment(
        //     doctorAppointments?.endTime
        //   ).format("HH:mm:ss");
        // }
        // console.log("existingAppointmentDate", existingAppointmentDate);
        // if (appointmentScheduleDate === existingAppointmentDate) {
        //   if (
        //     (appointmentStartTime >= existingAppointmentStartTime &&
        //       appointmentStartTime < existingAppointmentEndTime) ||
        //     (appointmentEndTime > existingAppointmentStartTime &&
        //       appointmentEndTime <= existingAppointmentEndTime) ||
        //     (appointmentStartTime <= existingAppointmentStartTime &&
        //       appointmentEndTime >= existingAppointmentEndTime)
        //   ) {
        //     throw new GraphQLError(
        //       "The selected time slot is already booked by another patient. Please select a different time."
        //     );
        //   }
        // }
        // const ImageUrl = await ImageUploader(presciptions);
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
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                scheduledDate,
                patientId: currentUserId,
                doctorId,
            },
        });
        return "Appointment Added";
    }
    async updateAppointment(fullName, email, age, gender, phoneNo, address, medicalHistory, presciptions, details, scheduledDate, startTime, endTime, doctorId, appointmentIdForUpdate, context
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
            !endTime ||
            !appointmentIdForUpdate) {
            throw new graphql_1.GraphQLError("Please add all required Fields");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        if (parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        if (context.payload.role !== "PATIENT") {
            throw new graphql_1.GraphQLError("You are not patient so you can't di this action");
        }
        console.log("User Role", context.payload?.role);
        const currentUserId = context.payload?.userId;
        if (!currentUserId) {
            throw new graphql_1.GraphQLError("User not found");
        }
        const checkDoctorId = await prisma_1.default.doctor.findUnique({
            where: { userId: doctorId },
        });
        if (!checkDoctorId) {
            throw new graphql_1.GraphQLError("Doctor not found!");
        }
        const checkDoctorAvailability = await prisma_1.default.availabilitySlot.findFirst({
            where: {
                doctorId: doctorId,
            },
        });
        if (!checkDoctorAvailability) {
            throw new graphql_1.GraphQLError("Doctor availability not found!");
        }
        const doctorStartTime = (0, moment_1.default)(checkDoctorAvailability?.startTime).format("HH:mm:ss");
        const doctorEndTime = (0, moment_1.default)(checkDoctorAvailability?.endTime).format("HH:mm:ss");
        const appointmentScheduleDate = (0, moment_1.default)(scheduledDate).format("YYYY-MM-DD");
        const appointmentStartTime = (0, moment_1.default)(startTime).format("HH:mm:ss");
        const appointmentEndTime = (0, moment_1.default)(endTime).format("HH:mm:ss");
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        console.log("appointmentScheduleDate", appointmentScheduleDate);
        const doctorAppointments = await prisma_1.default.appointment.findMany({
            where: {
                doctorId,
                scheduledDate,
                id: {
                    not: appointmentIdForUpdate,
                },
                OR: [
                    // Case 1: New appointment starts during an existing appointment
                    {
                        startTime: {
                            lte: endTime, // Existing appointment starts before or when the new one ends.
                        },
                        endTime: {
                            gte: startTime, // Existing appointment ends after or when the new one starts.
                        },
                    },
                    // Case 2: New appointment completely surrounds an existing one
                    {
                        startTime: {
                            gte: startTime, // Existing appointment starts after or when the new one starts.
                        },
                        endTime: {
                            lte: endTime, // Existing appointment ends before or when the new one ends.
                        },
                    },
                ],
            },
        });
        if (doctorAppointments.length > 0) {
            throw new graphql_1.GraphQLError(" The selected time slot is already booked by another patient. Please select a different time.");
        }
        await prisma_1.default.appointment.update({
            where: {
                id: appointmentIdForUpdate,
            },
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
                medicalHistory,
            },
        });
        return "Appointment updated";
    }
};
exports.AppointmentResolver = AppointmentResolver;
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
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Array, String, Date, String, String, Number, Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "createAppointment", null);
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
    __param(13, (0, type_graphql_1.Arg)("appointmentIdForUpdate")),
    __param(14, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Array, String, Date, String, String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "updateAppointment", null);
exports.AppointmentResolver = AppointmentResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Patient)
], AppointmentResolver);
