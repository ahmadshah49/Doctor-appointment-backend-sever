import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import moment from "moment";

import { Context } from "../context/Context";
import Prisma from "../lib/prisma";
import {
  AppointmentAlreadyBookedTypes,
  InvalidDateTimeTypes,
  validation,
  validationforDoctor,
} from "../types/types";

export const DateNotinPast = ({
  endTime,
  startTime,
  datescheduleDate,
  stringscheduleDate,
}: validation) => {
  const currentTimeUTC = moment().format("YYYY-MM-DD HH:mm:ss"); // UTC time
  console.log("Current Time (UTC):", currentTimeUTC);

  console.log("EndTime  Form Validation (UTC)", moment(endTime).utc().format());
  console.log(
    "startTime  Form Validation (UTC)",
    moment(startTime).utc().format()
  );
  console.log(
    "datescheduleDate Form Validation (UTC)",
    moment(datescheduleDate).utc().format()
  );
  console.log(
    "stringscheduleDate Form Validation (UTC)",
    moment(stringscheduleDate).utc().format()
  );

  const startTimeUTC = moment(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
  const endTimeUTC = moment(endTime).utc().format("YYYY-MM-DD HH:mm:ss");

  const scheduledDateUTC = moment(stringscheduleDate)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");

  const scheduledDateUTCDate = moment(datescheduleDate)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");
  console.log("startTime (UTC):", startTimeUTC);
  console.log("endTime (UTC):", endTimeUTC);
  console.log("scheduledDate (UTC):", scheduledDateUTC);

  if (startTime && moment(startTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Start time cannot be in the past");
  }

  if (endTime && moment(endTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("End time cannot be in the past");
  }

  if (
    datescheduleDate &&
    moment(scheduledDateUTCDate).isBefore(currentTimeUTC)
  ) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }
  if (
    stringscheduleDate &&
    moment(stringscheduleDate).isBefore(currentTimeUTC)
  ) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }

  return true;
};
export const InvalidDateTime = ({
  startTime,
  endTime,
  endDate,
  startDate,
}: InvalidDateTimeTypes) => {
  if (startTime && !isValid(parseISO(startTime))) {
    throw new GraphQLError(
      "Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
    );
  }
  if (endTime && !isValid(parseISO(endTime))) {
    throw new GraphQLError(
      "Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
    );
  }
  if (endDate && !isValid(parseISO(endDate))) {
    throw new GraphQLError(
      "Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
    );
  }
  if (startDate && !isValid(parseISO(startDate))) {
    throw new GraphQLError(
      "Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
    );
  }

  return true;
};
export const DateNotinPastforDoctor = ({
  endTime,
  startTime,
  startDate,
  endDate,
}: validationforDoctor) => {
  const currentTimeUTC = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log("Current Time (UTC):", currentTimeUTC);

  console.log("EndTime  Form Validation (UTC)", moment(endTime).utc().format());
  console.log(
    "startTime  Form Validation (UTC)",
    moment(startTime).utc().format()
  );
  console.log(
    "datescheduleDate Form Validation (UTC)",
    moment(startDate).utc().format()
  );
  console.log(
    "stringscheduleDate Form Validation (UTC)",
    moment(endDate).utc().format()
  );

  const startTimeUTC = moment(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
  const endTimeUTC = moment(endTime).utc().format("YYYY-MM-DD HH:mm:ss");

  const startDateUTC = moment(startDate).utc().format("YYYY-MM-DD HH:mm:ss");

  const endDateUTC = moment(endDate).utc().format("YYYY-MM-DD HH:mm:ss");
  console.log("startTime (UTC):", startTimeUTC);
  console.log("endTime (UTC):", endTimeUTC);
  console.log("startDateUTC (UTC):", startDateUTC);
  console.log("endDateUTC (UTC):", endDateUTC);

  if (startTime && moment(startTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Start time cannot be in the past");
  }

  if (endTime && moment(endTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("End time cannot be in the past");
  }

  if (startDate && moment(startDateUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }
  if (endDate && moment(endDateUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }

  return true;
};
export const validateUserRole = async (context: Context) => {
  const currentUserId = context.payload.userId;
  if (!currentUserId) {
    throw new GraphQLError("User not found");
  }

  // Fetch user from database
  const user = await Prisma.user.findUnique({
    where: { id: currentUserId },
    select: {
      role: true,
    },
  });

  if (!user) {
    throw new GraphQLError("User not found");
  }

  // Role-based validation
  if (user.role === "DOCTOR") {
    // Doctor-specific validation
    const isFillDoctorInfo = await Prisma.doctor.findUnique({
      where: { userId: currentUserId },
    });

    if (!isFillDoctorInfo) {
      throw new GraphQLError(
        "Doctor info is missing. Please fill your details first."
      );
    }
  } else if (user.role === "PATIENT") {
    // Patient-specific validation
    const isFillPatientInfo = await Prisma.patient.findUnique({
      where: { userId: currentUserId },
    });

    if (!isFillPatientInfo) {
      throw new GraphQLError(
        "Patient info is missing. Please fill your details first."
      );
    }
  } else {
    throw new GraphQLError("Invalid role");
  }

  return true;
};
export const AppointmentAlreadyBooked = async ({
  doctorId,
  endTime,
  scheduledDate,
  startTime,
  patientId,
}: AppointmentAlreadyBookedTypes) => {
  const doctorAppointments = await Prisma.appointment.findMany({
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
    throw new GraphQLError(
      " The selected time slot is already booked by another patient. Please select a different time."
    );
  }
  return true;
};
