"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentAlreadyBooked = exports.validateUserRole = exports.DateNotinPastforDoctor = exports.InvalidDateTime = exports.DateNotinPast = void 0;
const date_fns_1 = require("date-fns");
const graphql_1 = require("graphql");
const moment_1 = __importDefault(require("moment"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const DateNotinPast = ({ endTime, startTime, datescheduleDate, stringscheduleDate, }) => {
    const currentTimeUTC = (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"); // UTC time
    console.log("Current Time (UTC):", currentTimeUTC);
    console.log("EndTime  Form Validation (UTC)", (0, moment_1.default)(endTime).utc().format());
    console.log("startTime  Form Validation (UTC)", (0, moment_1.default)(startTime).utc().format());
    console.log("datescheduleDate Form Validation (UTC)", (0, moment_1.default)(datescheduleDate).utc().format());
    console.log("stringscheduleDate Form Validation (UTC)", (0, moment_1.default)(stringscheduleDate).utc().format());
    const startTimeUTC = (0, moment_1.default)(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
    const endTimeUTC = (0, moment_1.default)(endTime).utc().format("YYYY-MM-DD HH:mm:ss");
    const scheduledDateUTC = (0, moment_1.default)(stringscheduleDate)
        .utc()
        .format("YYYY-MM-DD HH:mm:ss");
    const scheduledDateUTCDate = (0, moment_1.default)(datescheduleDate)
        .utc()
        .format("YYYY-MM-DD HH:mm:ss");
    console.log("startTime (UTC):", startTimeUTC);
    console.log("endTime (UTC):", endTimeUTC);
    console.log("scheduledDate (UTC):", scheduledDateUTC);
    if (startTime && (0, moment_1.default)(startTimeUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Start time cannot be in the past");
    }
    if (endTime && (0, moment_1.default)(endTimeUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("End time cannot be in the past");
    }
    if (datescheduleDate &&
        (0, moment_1.default)(scheduledDateUTCDate).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Schedule date cannot be in the past");
    }
    if (stringscheduleDate &&
        (0, moment_1.default)(stringscheduleDate).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Schedule date cannot be in the past");
    }
    return true;
};
exports.DateNotinPast = DateNotinPast;
const InvalidDateTime = ({ startTime, endTime, endDate, startDate, }) => {
    if (startTime && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startTime))) {
        throw new graphql_1.GraphQLError("Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z).");
    }
    if (endTime && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endTime))) {
        throw new graphql_1.GraphQLError("Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
    }
    if (endDate && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(endDate))) {
        throw new graphql_1.GraphQLError("Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
    }
    if (startDate && !(0, date_fns_1.isValid)((0, date_fns_1.parseISO)(startDate))) {
        throw new graphql_1.GraphQLError("Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z).");
    }
    return true;
};
exports.InvalidDateTime = InvalidDateTime;
const DateNotinPastforDoctor = ({ endTime, startTime, startDate, endDate, }) => {
    const currentTimeUTC = (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss");
    console.log("Current Time (UTC):", currentTimeUTC);
    console.log("EndTime  Form Validation (UTC)", (0, moment_1.default)(endTime).utc().format());
    console.log("startTime  Form Validation (UTC)", (0, moment_1.default)(startTime).utc().format());
    console.log("datescheduleDate Form Validation (UTC)", (0, moment_1.default)(startDate).utc().format());
    console.log("stringscheduleDate Form Validation (UTC)", (0, moment_1.default)(endDate).utc().format());
    const startTimeUTC = (0, moment_1.default)(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
    const endTimeUTC = (0, moment_1.default)(endTime).utc().format("YYYY-MM-DD HH:mm:ss");
    const startDateUTC = (0, moment_1.default)(startDate).utc().format("YYYY-MM-DD HH:mm:ss");
    const endDateUTC = (0, moment_1.default)(endDate).utc().format("YYYY-MM-DD HH:mm:ss");
    console.log("startTime (UTC):", startTimeUTC);
    console.log("endTime (UTC):", endTimeUTC);
    console.log("startDateUTC (UTC):", startDateUTC);
    console.log("endDateUTC (UTC):", endDateUTC);
    if (startTime && (0, moment_1.default)(startTimeUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Start time cannot be in the past");
    }
    if (endTime && (0, moment_1.default)(endTimeUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("End time cannot be in the past");
    }
    if (startDate && (0, moment_1.default)(startDateUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Schedule date cannot be in the past");
    }
    if (endDate && (0, moment_1.default)(endDateUTC).isBefore(currentTimeUTC)) {
        throw new graphql_1.GraphQLError("Schedule date cannot be in the past");
    }
    return true;
};
exports.DateNotinPastforDoctor = DateNotinPastforDoctor;
const validateUserRole = async (context) => {
    const currentUserId = context.payload.userId;
    if (!currentUserId) {
        throw new graphql_1.GraphQLError("User not found");
    }
    const user = await prisma_1.default.user.findUnique({
        where: { id: currentUserId },
        select: {
            role: true,
        },
    });
    if (!user) {
        throw new graphql_1.GraphQLError("User not found");
    }
    if (user.role === "DOCTOR") {
        const isFillDoctorInfo = await prisma_1.default.doctor.findUnique({
            where: { userId: currentUserId },
        });
        if (!isFillDoctorInfo) {
            throw new graphql_1.GraphQLError("Doctor info is missing. Please fill your details first.");
        }
    }
    else if (user.role === "PATIENT") {
        const isFillPatientInfo = await prisma_1.default.patient.findUnique({
            where: { userId: currentUserId },
        });
        if (!isFillPatientInfo) {
            throw new graphql_1.GraphQLError("Patient info is missing. Please fill your details first.");
        }
    }
    else {
        throw new graphql_1.GraphQLError("Invalid role");
    }
    return true;
};
exports.validateUserRole = validateUserRole;
const AppointmentAlreadyBooked = async ({ doctorId, endTime, scheduledDate, startTime, patientId, }) => {
    const doctorAppointments = await prisma_1.default.appointment.findMany({
        where: {
            doctorId: doctorId,
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
    return true;
};
exports.AppointmentAlreadyBooked = AppointmentAlreadyBooked;
