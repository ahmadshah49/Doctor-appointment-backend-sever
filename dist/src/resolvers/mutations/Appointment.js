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
const date_fns_1 = require("date-fns");
const graphql_1 = require("graphql");
const moment_1 = __importDefault(require("moment"));
const type_graphql_1 = require("type-graphql");
const cron_1 = require("../../cron");
const type_graphql_2 = require("../../generated/type-graphql");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const MiddleWare_1 = require("../../middleware/MiddleWare");
const Validation_1 = require("../../validations/Validation");
const MultipleImagesUploader_1 = require("../../utils/MultipleImagesUploader");
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
        (0, Validation_1.InvalidDateTime)({ startTime, endTime });
        // DateNotinPast({ startTime, datescheduleDate: scheduledDate, endTime });
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        (0, Validation_1.DateNotinPast)({
            startTime: parsedStartTime,
            datescheduleDate: scheduledDate,
            endTime: parsedEndTime,
        });
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
        const checkDoctorUnAvailability = await prisma_1.default.unavailabilitySlot.findFirst({
            where: {
                doctorId,
            },
        });
        const unavailableDoctorStartDate = (0, moment_1.default)(checkDoctorUnAvailability?.startDate).format("YYYY-MM-DD");
        const unavailableDoctorEndDate = (0, moment_1.default)(checkDoctorUnAvailability?.endDate).format("YYYY-MM-DD");
        const unavailableDoctorStartTime = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("HH:mm:ss");
        const unavailableDoctorEndTime = moment_1.default
            .utc(checkDoctorUnAvailability?.endTime)
            .format("HH:mm:ss");
        const unavailableDoctorOneDay = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("YYYY-MM-DD");
        if (!checkDoctorAvailability) {
            throw new graphql_1.GraphQLError("Doctor availability not found!");
        }
        const doctorStartTime = moment_1.default
            .utc(checkDoctorAvailability?.startTime)
            .format("HH:mm:ss");
        const doctorEndTime = moment_1.default
            .utc(checkDoctorAvailability?.endTime)
            .format("HH:mm:ss");
        const appointmentScheduleDate = (0, moment_1.default)(scheduledDate).format("YYYY-MM-DD");
        const appointmentStartTime = moment_1.default.utc(startTime).format("HH:mm:ss");
        const appointmentEndTime = moment_1.default.utc(endTime).format("HH:mm:ss");
        const LocalappointmentStartTime = moment_1.default
            .utc(startTime)
            .format("HH:mm:ss");
        const LocalappointmentEndTime = moment_1.default
            .utc(endTime)
            .format("HH:mm:ss");
        // console.log("LocalappointmentStartTime:", LocalappointmentStartTime); // Will log based on your system's time zone
        // console.log("LocalappointmentEndTime:", LocalappointmentEndTime);
        console.log("parsedStartTime:", moment_1.default.utc(parsedStartTime).format("HH:mm:ss"));
        console.log("parsedEndTime:", moment_1.default.utc(parsedEndTime).format("HH:mm:ss"));
        console.log("appointmentStartTime", appointmentStartTime);
        console.log("appointmentEndTime", appointmentEndTime);
        console.log("unavailableDoctorOneDay", unavailableDoctorOneDay);
        console.log("appointmentStartTime", appointmentStartTime);
        console.log("unavailableDoctorStartTime", unavailableDoctorStartTime);
        console.log("unavailableDoctorEndTime", unavailableDoctorEndTime);
        console.log("appointmentEndTime", appointmentEndTime);
        console.log("Doctor Start Time", doctorStartTime);
        console.log("Doctor End Time", doctorEndTime);
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        if (unavailableDoctorStartDate && unavailableDoctorEndDate) {
            if (appointmentScheduleDate >= unavailableDoctorStartDate &&
                appointmentScheduleDate <= unavailableDoctorEndDate) {
                if ((appointmentStartTime >= unavailableDoctorStartTime &&
                    appointmentStartTime < unavailableDoctorEndTime) ||
                    (appointmentEndTime > unavailableDoctorStartTime &&
                        appointmentEndTime <= unavailableDoctorEndTime) ||
                    (appointmentStartTime <= unavailableDoctorStartTime &&
                        appointmentEndTime >= unavailableDoctorEndTime)) {
                    throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
                }
            }
        }
        if (appointmentScheduleDate === unavailableDoctorOneDay) {
            if ((appointmentStartTime >= unavailableDoctorStartTime &&
                appointmentStartTime < unavailableDoctorEndTime) ||
                (appointmentEndTime > unavailableDoctorStartTime &&
                    appointmentEndTime <= unavailableDoctorEndTime) ||
                (appointmentStartTime <= unavailableDoctorStartTime &&
                    appointmentEndTime >= unavailableDoctorEndTime)) {
                throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
            }
        }
        console.log("appointmentScheduleDate", appointmentScheduleDate);
        const doctorAppointments = await prisma_1.default.appointment.findMany({
            where: {
                doctorId,
                scheduledDate,
                OR: [
                    {
                        startTime: {
                            lte: endTime,
                        },
                        endTime: {
                            gte: startTime,
                        },
                    },
                    {
                        startTime: {
                            gte: startTime,
                        },
                        endTime: {
                            lte: endTime,
                        },
                    },
                ],
            },
        });
        if (doctorAppointments.length > 0) {
            throw new graphql_1.GraphQLError(" The selected time slot is already booked by another patient. Please select a different time.");
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
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                scheduledDate,
                patientId: currentUserId,
                doctorId,
            },
        });
        return "Appointment Added";
    }
    async updateAppointment(fullName, email, age, gender, phoneNo, address, medicalHistory, presciptions, details, scheduledDate, startTime, endTime, doctorId, appointmentIdForUpdate, context) {
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
        (0, Validation_1.InvalidDateTime)({ startTime, endTime });
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        (0, Validation_1.DateNotinPast)({
            startTime: parsedStartTime,
            datescheduleDate: scheduledDate,
            endTime: parsedEndTime,
        });
        if (parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        if (context.payload.role !== "PATIENT") {
            throw new graphql_1.GraphQLError("You are not patient so you can't di this action");
        }
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
        const checkDoctorUnAvailability = await prisma_1.default.unavailabilitySlot.findFirst({
            where: {
                doctorId,
            },
        });
        const unavailableDoctorStartDate = (0, moment_1.default)(checkDoctorUnAvailability?.startDate).format("YYYY-MM-DD");
        const unavailableDoctorEndDate = (0, moment_1.default)(checkDoctorUnAvailability?.endDate).format("YYYY-MM-DD");
        const unavailableDoctorStartTime = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("HH:mm:ss");
        const unavailableDoctorEndTime = moment_1.default
            .utc(checkDoctorUnAvailability?.endTime)
            .format("HH:mm:ss");
        const unavailableDoctorOneDay = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("YYYY-MM-DD");
        if (!checkDoctorAvailability) {
            throw new graphql_1.GraphQLError("Doctor availability not found!");
        }
        const doctorStartTime = moment_1.default
            .utc(checkDoctorAvailability?.startTime)
            .format("HH:mm:ss");
        const doctorEndTime = moment_1.default
            .utc(checkDoctorAvailability?.endTime)
            .format("HH:mm:ss");
        const appointmentScheduleDate = (0, moment_1.default)(scheduledDate).format("YYYY-MM-DD");
        const appointmentStartTime = moment_1.default.utc(startTime).format("HH:mm:ss");
        const appointmentEndTime = moment_1.default.utc(endTime).format("HH:mm:ss");
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        if (unavailableDoctorStartDate && unavailableDoctorEndDate) {
            if (appointmentScheduleDate >= unavailableDoctorStartDate &&
                appointmentScheduleDate <= unavailableDoctorEndDate) {
                if ((appointmentStartTime >= unavailableDoctorStartTime &&
                    appointmentStartTime < unavailableDoctorEndTime) ||
                    (appointmentEndTime > unavailableDoctorStartTime &&
                        appointmentEndTime <= unavailableDoctorEndTime) ||
                    (appointmentStartTime <= unavailableDoctorStartTime &&
                        appointmentEndTime >= unavailableDoctorEndTime)) {
                    throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
                }
            }
        }
        if (appointmentScheduleDate === unavailableDoctorOneDay) {
            if ((appointmentStartTime >= unavailableDoctorStartTime &&
                appointmentStartTime < unavailableDoctorEndTime) ||
                (appointmentEndTime > unavailableDoctorStartTime &&
                    appointmentEndTime <= unavailableDoctorEndTime) ||
                (appointmentStartTime <= unavailableDoctorStartTime &&
                    appointmentEndTime >= unavailableDoctorEndTime)) {
                throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
            }
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
                    {
                        startTime: {
                            lte: endTime,
                        },
                        endTime: {
                            gte: startTime,
                        },
                    },
                    {
                        startTime: {
                            gte: startTime,
                        },
                        endTime: {
                            lte: endTime,
                        },
                    },
                ],
            },
        });
        if (doctorAppointments.length > 0) {
            throw new graphql_1.GraphQLError(" The selected time slot is already booked by another patient. Please select a different time.");
        }
        let imageUrl = null;
        if (presciptions) {
            try {
                imageUrl = await (0, MultipleImagesUploader_1.MultipleImagesUploader)(presciptions);
            }
            catch (error) {
                throw new graphql_1.GraphQLError("Error uploading profile picture: ", error.message);
            }
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
                presciptions: imageUrl,
                startTime,
                endTime,
                scheduledDate,
                patientId: currentUserId,
                doctorId,
                medicalHistory,
                status: "UPCOMING",
            },
        });
        return "Appointment updated";
    }
    async cancelAppointment(patientId) {
        await prisma_1.default.appointment.update({
            where: {
                id: patientId,
            },
            data: {
                status: "CANCELLED",
            },
        });
        return "Appointment Cancel";
    }
    async completeAppointment(patientId) {
        await prisma_1.default.appointment.update({
            where: {
                id: patientId,
            },
            data: {
                status: "COMPLETED",
            },
        });
        return "Appointment Completed";
    }
    async rescheduleAppointment(patientId, scheduledDate, startTime, endTime, context) {
        if (context.payload.role !== "PATIENT") {
            throw new graphql_1.GraphQLError("You have not access to reschedule this appointment");
        }
        if (!context.payload.userId) {
            throw new graphql_1.GraphQLError("User not found!");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
            throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
        }
        if (!(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
            throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
        }
        const doctor = await prisma_1.default.appointment.findUnique({
            where: { id: patientId },
        });
        const parsedStartTime = (0, date_fns_1.parseISO)(startTime);
        const parsedEndTime = (0, date_fns_1.parseISO)(endTime);
        if (parsedStartTime >= parsedEndTime) {
            throw new graphql_1.GraphQLError("Start time must be before end time on the same day.");
        }
        (0, Validation_1.DateNotinPast)({
            startTime: parsedStartTime,
            stringscheduleDate: scheduledDate,
            endTime: parsedEndTime,
        });
        const checkDoctorAvailability = await prisma_1.default.availabilitySlot.findFirst({
            where: {
                doctorId: doctor.doctorId,
            },
        });
        const checkDoctorUnAvailability = await prisma_1.default.unavailabilitySlot.findFirst({
            where: {
                doctorId: doctor.doctorId,
            },
        });
        const unavailableDoctorStartDate = (0, moment_1.default)(checkDoctorUnAvailability?.startDate).format("YYYY-MM-DD");
        const unavailableDoctorEndDate = (0, moment_1.default)(checkDoctorUnAvailability?.endDate).format("YYYY-MM-DD");
        const unavailableDoctorStartTime = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("HH:mm:ss");
        const unavailableDoctorEndTime = moment_1.default
            .utc(checkDoctorUnAvailability?.endTime)
            .format("HH:mm:ss");
        const unavailableDoctorOneDay = moment_1.default
            .utc(checkDoctorUnAvailability?.startTime)
            .format("YYYY-MM-DD");
        if (!checkDoctorAvailability) {
            console.log("Doctor ID ", doctor.doctorId);
            throw new graphql_1.GraphQLError("Doctor availability not found!");
        }
        const doctorStartTime = moment_1.default
            .utc(checkDoctorAvailability?.startTime)
            .format("HH:mm:ss");
        const doctorEndTime = moment_1.default
            .utc(checkDoctorAvailability?.endTime)
            .format("HH:mm:ss");
        const appointmentScheduleDate = (0, moment_1.default)(scheduledDate).format("YYYY-MM-DD");
        const appointmentStartTime = moment_1.default.utc(startTime).format("HH:mm:ss");
        const appointmentEndTime = moment_1.default.utc(endTime).format("HH:mm:ss");
        if (!(doctorStartTime <= appointmentStartTime &&
            doctorEndTime >= appointmentEndTime)) {
            throw new graphql_1.GraphQLError("Doctor is not available at this time");
        }
        if (unavailableDoctorStartDate && unavailableDoctorEndDate) {
            if (appointmentScheduleDate >= unavailableDoctorStartDate &&
                appointmentScheduleDate <= unavailableDoctorEndDate) {
                if ((appointmentStartTime >= unavailableDoctorStartTime &&
                    appointmentStartTime < unavailableDoctorEndTime) ||
                    (appointmentEndTime > unavailableDoctorStartTime &&
                        appointmentEndTime <= unavailableDoctorEndTime) ||
                    (appointmentStartTime <= unavailableDoctorStartTime &&
                        appointmentEndTime >= unavailableDoctorEndTime)) {
                    throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
                }
            }
        }
        if (appointmentScheduleDate === unavailableDoctorOneDay) {
            if ((appointmentStartTime >= unavailableDoctorStartTime &&
                appointmentStartTime < unavailableDoctorEndTime) ||
                (appointmentEndTime > unavailableDoctorStartTime &&
                    appointmentEndTime <= unavailableDoctorEndTime) ||
                (appointmentStartTime <= unavailableDoctorStartTime &&
                    appointmentEndTime >= unavailableDoctorEndTime)) {
                throw new graphql_1.GraphQLError("Doctor is unavailable during this time. Please choose another time slot.");
            }
        }
        console.log("appointmentScheduleDate", appointmentScheduleDate);
        const doctorAppointments = await prisma_1.default.appointment.findMany({
            where: {
                doctorId: doctor.doctorId,
                scheduledDate,
                id: {
                    not: patientId,
                },
                OR: [
                    {
                        startTime: {
                            lte: endTime,
                        },
                        endTime: {
                            gte: startTime,
                        },
                    },
                    {
                        startTime: {
                            gte: startTime,
                        },
                        endTime: {
                            lte: endTime,
                        },
                    },
                ],
            },
        });
        if (doctorAppointments.length > 0) {
            throw new graphql_1.GraphQLError(" The selected time slot is already booked by another patient. Please select a different time.");
        }
        await prisma_1.default.appointment.update({
            where: { id: patientId },
            data: {
                scheduledDate,
                startTime: parsedStartTime,
                endTime: parsedEndTime,
                status: "UPCOMING",
            },
        });
        return "Appointment reschedule ";
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
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("PatientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "cancelAppointment", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth, MiddleWare_1.isDoctor),
    __param(0, (0, type_graphql_1.Arg)("PatientId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "completeAppointment", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    (0, type_graphql_1.UseMiddleware)(MiddleWare_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("PatientId")),
    __param(1, (0, type_graphql_1.Arg)("scheduledDate")),
    __param(2, (0, type_graphql_1.Arg)("startTime")),
    __param(3, (0, type_graphql_1.Arg)("endTime")),
    __param(4, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AppointmentResolver.prototype, "rescheduleAppointment", null);
exports.AppointmentResolver = AppointmentResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => type_graphql_2.Patient)
], AppointmentResolver);
cron_1.cronAppointments;
