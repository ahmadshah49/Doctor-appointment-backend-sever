import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth } from "../../middleware/MiddleWare";
import { ImageUploader } from "../../utils/ImageUploader";
import moment from "moment";
import { isValid, parseISO } from "date-fns";

@Resolver(() => Patient)
export class AppointmentResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async createAppointment(
    @Arg("fullName") fullName: string,
    @Arg("email") email: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("phoneNo") phoneNo: string,
    @Arg("address") address: string,
    @Arg("medicalHistory", { nullable: true }) medicalHistory: string,
    @Arg("presciptions", () => [String], { nullable: true })
    presciptions: string[],
    @Arg("details", { nullable: true }) details: string,
    @Arg("scheduledDate") scheduledDate: Date,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("doctorId") doctorId: number,
    @Ctx() context: Context
    // @Arg("patientId") patientId: number
  ) {
    if (
      !fullName ||
      !email ||
      !age ||
      !gender ||
      !phoneNo ||
      !address ||
      !presciptions ||
      !scheduledDate ||
      !startTime ||
      !endTime
    ) {
      throw new GraphQLError("Please add all required Fields");
    }
    if (!isValid(parseISO(startTime))) {
      throw new GraphQLError(
        "Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
      );
    }

    if (!isValid(parseISO(endTime))) {
      throw new GraphQLError(
        "Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
      );
    }
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
    if (parsedStartTime >= parsedEndTime) {
      throw new GraphQLError(
        "Start time must be before end time on the same day."
      );
    }

    if (context.payload.role !== "PATIENT") {
      throw new GraphQLError("You are not patient so you can't di this action");
    }
    console.log("User Role", context.payload?.role);
    const currentUserId = context.payload?.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }

    const checkDoctorId = await Prisma.doctor.findUnique({
      where: { userId: doctorId },
    });
    if (!checkDoctorId) {
      throw new GraphQLError("Doctor not found!");
    }

    const checkDoctorAvailability = await Prisma.availabilitySlot.findFirst({
      where: {
        doctorId: doctorId,
      },
    });

    if (!checkDoctorAvailability) {
      throw new GraphQLError("Doctor availability not found!");
    }

    const doctorStartTime = moment(checkDoctorAvailability?.startTime).format(
      "HH:mm:ss"
    );
    const doctorEndTime = moment(checkDoctorAvailability?.endTime).format(
      "HH:mm:ss"
    );
    const appointmentScheduleDate = moment(scheduledDate).format("YYYY-MM-DD");
    const appointmentStartTime = moment(startTime).format("HH:mm:ss");
    const appointmentEndTime = moment(endTime).format("HH:mm:ss");

    if (
      !(
        doctorStartTime <= appointmentStartTime &&
        doctorEndTime >= appointmentEndTime
      )
    ) {
      throw new GraphQLError("Doctor is not available at this time");
    }
    console.log("appointmentScheduleDate", appointmentScheduleDate);

    const doctorAppointments = await Prisma.appointment.findMany({
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
      throw new GraphQLError(
        " The selected time slot is already booked by another patient. Please select a different time."
      );
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
    await Prisma.appointment.create({
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
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updateAppointment(
    @Arg("fullName") fullName: string,
    @Arg("email") email: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("phoneNo") phoneNo: string,
    @Arg("address") address: string,
    @Arg("medicalHistory", { nullable: true }) medicalHistory: string,
    @Arg("presciptions", () => [String], { nullable: true })
    presciptions: string[],
    @Arg("details", { nullable: true }) details: string,
    @Arg("scheduledDate") scheduledDate: Date,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("doctorId") doctorId: number,
    @Arg("appointmentIdForUpdate") appointmentIdForUpdate: number,
    @Ctx() context: Context
    // @Arg("patientId") patientId: number
  ) {
    if (
      !fullName ||
      !email ||
      !age ||
      !gender ||
      !phoneNo ||
      !address ||
      !presciptions ||
      !scheduledDate ||
      !startTime ||
      !endTime ||
      !appointmentIdForUpdate
    ) {
      throw new GraphQLError("Please add all required Fields");
    }

    if (!isValid(parseISO(startTime))) {
      throw new GraphQLError(
        "Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
      );
    }

    if (!isValid(parseISO(endTime))) {
      throw new GraphQLError(
        "Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
      );
    }
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
    if (parsedStartTime >= parsedEndTime) {
      throw new GraphQLError(
        "Start time must be before end time on the same day."
      );
    }

    if (context.payload.role !== "PATIENT") {
      throw new GraphQLError("You are not patient so you can't di this action");
    }
    console.log("User Role", context.payload?.role);
    const currentUserId = context.payload?.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }

    const checkDoctorId = await Prisma.doctor.findUnique({
      where: { userId: doctorId },
    });
    if (!checkDoctorId) {
      throw new GraphQLError("Doctor not found!");
    }

    const checkDoctorAvailability = await Prisma.availabilitySlot.findFirst({
      where: {
        doctorId: doctorId,
      },
    });

    if (!checkDoctorAvailability) {
      throw new GraphQLError("Doctor availability not found!");
    }

    const doctorStartTime = moment(checkDoctorAvailability?.startTime).format(
      "HH:mm:ss"
    );
    const doctorEndTime = moment(checkDoctorAvailability?.endTime).format(
      "HH:mm:ss"
    );
    const appointmentScheduleDate = moment(scheduledDate).format("YYYY-MM-DD");
    const appointmentStartTime = moment(startTime).format("HH:mm:ss");
    const appointmentEndTime = moment(endTime).format("HH:mm:ss");

    if (
      !(
        doctorStartTime <= appointmentStartTime &&
        doctorEndTime >= appointmentEndTime
      )
    ) {
      throw new GraphQLError("Doctor is not available at this time");
    }
    console.log("appointmentScheduleDate", appointmentScheduleDate);

    const doctorAppointments = await Prisma.appointment.findMany({
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
      throw new GraphQLError(
        " The selected time slot is already booked by another patient. Please select a different time."
      );
    }
    await Prisma.appointment.update({
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
}
