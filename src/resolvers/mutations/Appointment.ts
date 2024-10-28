import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import moment from "moment";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Context } from "../../context/Context";
import { cronAppointments } from "../../cron";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { MultipleImagesUploader } from "../../utils/MultipleImagesUploader";
import {
  AppointmentAlreadyBooked,
  DateNotinPast,
  InvalidDateTime,
  validateUserRole,
} from "../../validations/Validation";

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
  ) {
    try {
      await validateUserRole(context);
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
      InvalidDateTime({ startTime, endTime });

      const parsedStartTime = parseISO(startTime);
      const parsedEndTime = parseISO(endTime);
      DateNotinPast({
        startTime: parsedStartTime,
        datescheduleDate: scheduledDate,
        endTime: parsedEndTime,
      });
      if (parsedStartTime >= parsedEndTime) {
        throw new GraphQLError(
          "Start time must be before end time on the same day."
        );
      }

      if (context.payload.role !== "PATIENT") {
        throw new GraphQLError(
          "You are not patient so you can't di this action"
        );
      }
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
      const checkDoctorUnAvailability =
        await Prisma.unavailabilitySlot.findFirst({
          where: {
            doctorId,
          },
        });
      const unavailableDoctorStartDate = moment(
        checkDoctorUnAvailability?.startDate
      ).format("YYYY-MM-DD");
      const unavailableDoctorEndDate = moment(
        checkDoctorUnAvailability?.endDate
      ).format("YYYY-MM-DD");
      const unavailableDoctorStartTime = moment
        .utc(checkDoctorUnAvailability?.startTime)
        .format("HH:mm:ss");
      const unavailableDoctorEndTime = moment
        .utc(checkDoctorUnAvailability?.endTime)
        .format("HH:mm:ss");
      const unavailableDoctorOneDay = moment
        .utc(checkDoctorUnAvailability?.startTime)
        .format("YYYY-MM-DD");

      if (!checkDoctorAvailability) {
        throw new GraphQLError("Doctor availability not found!");
      }

      const doctorStartTime = moment
        .utc(checkDoctorAvailability?.startTime)
        .format("HH:mm:ss");
      const doctorEndTime = moment
        .utc(checkDoctorAvailability?.endTime)
        .format("HH:mm:ss");
      const appointmentScheduleDate =
        moment(scheduledDate).format("YYYY-MM-DD");
      const appointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
      const appointmentEndTime = moment.utc(endTime).format("HH:mm:ss");

      if (
        !(
          doctorStartTime <= appointmentStartTime &&
          doctorEndTime >= appointmentEndTime
        )
      ) {
        throw new GraphQLError("Doctor is not available at this time");
      }
      if (unavailableDoctorStartDate && unavailableDoctorEndDate) {
        if (
          appointmentScheduleDate >= unavailableDoctorStartDate &&
          appointmentScheduleDate <= unavailableDoctorEndDate
        ) {
          if (
            (appointmentStartTime >= unavailableDoctorStartTime &&
              appointmentStartTime < unavailableDoctorEndTime) ||
            (appointmentEndTime > unavailableDoctorStartTime &&
              appointmentEndTime <= unavailableDoctorEndTime) ||
            (appointmentStartTime <= unavailableDoctorStartTime &&
              appointmentEndTime >= unavailableDoctorEndTime)
          ) {
            throw new GraphQLError(
              "Doctor is unavailable during this time. Please choose another time slot."
            );
          }
        }
      }
      if (appointmentScheduleDate === unavailableDoctorOneDay) {
        if (
          (appointmentStartTime >= unavailableDoctorStartTime &&
            appointmentStartTime < unavailableDoctorEndTime) ||
          (appointmentEndTime > unavailableDoctorStartTime &&
            appointmentEndTime <= unavailableDoctorEndTime) ||
          (appointmentStartTime <= unavailableDoctorStartTime &&
            appointmentEndTime >= unavailableDoctorEndTime)
        ) {
          throw new GraphQLError(
            "Doctor is unavailable during this time. Please choose another time slot."
          );
        }
      }
      await AppointmentAlreadyBooked({
        doctorId: doctorId,
        endTime,
        scheduledDate,
        startTime,
      });

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
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updateAppointment(
    @Arg("fullName", { nullable: true }) fullName: string,
    @Arg("email", { nullable: true }) email: string,
    @Arg("age", { nullable: true }) age: string,
    @Arg("gender", () => gender, { nullable: true }) gender: gender,
    @Arg("phoneNo", { nullable: true }) phoneNo: string,
    @Arg("address", { nullable: true }) address: string,
    @Arg("medicalHistory", { nullable: true }) medicalHistory: string,
    @Arg("presciptions", () => [String], { nullable: true })
    presciptions: string[],
    @Arg("details", { nullable: true }) details: string,
    @Arg("doctorId") doctorId: number,
    @Arg("appointmentIdForUpdate") appointmentIdForUpdate: number,
    @Ctx() context: Context
  ) {
    try {
      await validateUserRole(context);
      if (!appointmentIdForUpdate || !doctorId) {
        throw new GraphQLError(
          "Please add appointmentIdForUpdate and doctorId"
        );
      }

      if (context.payload.role !== "PATIENT") {
        throw new GraphQLError(
          "You are not patient so you can't do this action"
        );
      }

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

      const checkAppointmentId = await Prisma.appointment.findUnique({
        where: { id: appointmentIdForUpdate },
      });
      if (!checkAppointmentId) {
        throw new GraphQLError("Appointment not found!");
      }

      let imageUrl = null;
      if (presciptions) {
        try {
          imageUrl = await MultipleImagesUploader(presciptions);
        } catch (error) {
          throw new GraphQLError(
            "Error uploading profile picture: ",
            error.message
          );
        }
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
          presciptions: imageUrl,
          patientId: currentUserId,
          doctorId,
          medicalHistory,
        },
      });
      return "Appointment updated";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async cancelAppointment(@Arg("AppointmentId") appointmentId: number) {
    if (!appointmentId) {
      throw new GraphQLError("Please add Appointment Id");
    }
    try {
      await Prisma.appointment.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: "CANCELLED",
        },
      });
      return "Appointment Cancel";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async completeAppointment(
    @Arg("AppointmentId") appointmentId: number,
    @Ctx() context: Context
  ) {
    try {
      await validateUserRole(context);
      await Prisma.appointment.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: "COMPLETED",
        },
      });
      return "Appointment Completed";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async rescheduleAppointment(
    @Arg("AppointmentId") appointmentId: number,
    @Arg("scheduledDate") scheduledDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Ctx() context: Context
  ) {
    try {
      await validateUserRole(context);
      if (context.payload.role !== "PATIENT") {
        throw new GraphQLError(
          "You have not access to reschedule this appointment"
        );
      }
      if (!context.payload.userId) {
        throw new GraphQLError("User not found!");
      }

      if (startTime === "" || endTime === "" || scheduledDate === " ") {
        throw new GraphQLError("Invalid date or time input");
      }

      if (!isValid(parseISO(scheduledDate))) {
        throw new GraphQLError(
          "Invalid scheduledDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
        );
      }

      InvalidDateTime({ startTime, endTime });
      const doctor = await Prisma.appointment.findUnique({
        where: { id: appointmentId },
      });

      const parsedStartTime = parseISO(startTime);
      const parsedEndTime = parseISO(endTime);
      if (!isValid(parsedStartTime) || !isValid(parsedEndTime)) {
        throw new GraphQLError("Invalid time format");
      }

      if (parsedStartTime >= parsedEndTime) {
        throw new GraphQLError(
          "Start time must be before end time on the same day."
        );
      }
      DateNotinPast({
        startTime: parsedStartTime,
        stringscheduleDate: scheduledDate,
        endTime: parsedEndTime,
      });
      const checkDoctorAvailability = await Prisma.availabilitySlot.findFirst({
        where: {
          doctorId: doctor.doctorId,
        },
      });
      const checkDoctorUnAvailability =
        await Prisma.unavailabilitySlot.findFirst({
          where: {
            doctorId: doctor.doctorId,
          },
        });
      const unavailableDoctorStartDate = moment(
        checkDoctorUnAvailability?.startDate
      ).format("YYYY-MM-DD");
      const unavailableDoctorEndDate = moment(
        checkDoctorUnAvailability?.endDate
      ).format("YYYY-MM-DD");
      const unavailableDoctorStartTime = moment
        .utc(checkDoctorUnAvailability?.startTime)
        .format("HH:mm:ss");
      const unavailableDoctorEndTime = moment
        .utc(checkDoctorUnAvailability?.endTime)
        .format("HH:mm:ss");
      const unavailableDoctorOneDay = moment
        .utc(checkDoctorUnAvailability?.startTime)
        .format("YYYY-MM-DD");

      if (!checkDoctorAvailability) {
        throw new GraphQLError("Doctor availability not found!");
      }

      const doctorStartTime = moment
        .utc(checkDoctorAvailability?.startTime)
        .format("HH:mm:ss");
      const doctorEndTime = moment
        .utc(checkDoctorAvailability?.endTime)
        .format("HH:mm:ss");
      const appointmentScheduleDate =
        moment(scheduledDate).format("YYYY-MM-DD");
      const appointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
      const appointmentEndTime = moment.utc(endTime).format("HH:mm:ss");

      if (
        !(
          doctorStartTime <= appointmentStartTime &&
          doctorEndTime >= appointmentEndTime
        )
      ) {
        throw new GraphQLError("Doctor is not available at this time");
      }
      if (unavailableDoctorStartDate && unavailableDoctorEndDate) {
        if (
          appointmentScheduleDate >= unavailableDoctorStartDate &&
          appointmentScheduleDate <= unavailableDoctorEndDate
        ) {
          if (
            (appointmentStartTime >= unavailableDoctorStartTime &&
              appointmentStartTime < unavailableDoctorEndTime) ||
            (appointmentEndTime > unavailableDoctorStartTime &&
              appointmentEndTime <= unavailableDoctorEndTime) ||
            (appointmentStartTime <= unavailableDoctorStartTime &&
              appointmentEndTime >= unavailableDoctorEndTime)
          ) {
            throw new GraphQLError(
              "Doctor is unavailable during this time. Please choose another time slot."
            );
          }
        }
      }
      if (appointmentScheduleDate === unavailableDoctorOneDay) {
        if (
          (appointmentStartTime >= unavailableDoctorStartTime &&
            appointmentStartTime < unavailableDoctorEndTime) ||
          (appointmentEndTime > unavailableDoctorStartTime &&
            appointmentEndTime <= unavailableDoctorEndTime) ||
          (appointmentStartTime <= unavailableDoctorStartTime &&
            appointmentEndTime >= unavailableDoctorEndTime)
        ) {
          throw new GraphQLError(
            "Doctor is unavailable during this time. Please choose another time slot."
          );
        }
      }
      await AppointmentAlreadyBooked({
        doctorId: doctor.doctorId,
        patientId: appointmentId,
        endTime,
        scheduledDate,
        startTime,
      });

      await Prisma.appointment.update({
        where: { id: appointmentId },
        data: {
          scheduledDate,
          startTime: parsedStartTime,
          endTime: parsedEndTime,
          status: "UPCOMING",
        },
      });
      return "Appointment reschedule ";
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
}
cronAppointments;
