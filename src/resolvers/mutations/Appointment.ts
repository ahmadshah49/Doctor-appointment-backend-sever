import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import moment from "moment";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { cronAppointments } from "../../cron";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
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
    const checkDoctorUnAvailability = await Prisma.unavailabilitySlot.findFirst(
      {
        where: {
          doctorId,
        },
      }
    );
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
    const appointmentScheduleDate = moment(scheduledDate).format("YYYY-MM-DD");
    const appointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
    const appointmentEndTime = moment.utc(endTime).format("HH:mm:ss");
    const LocalappointmentStartTime = moment
      .utc(startTime)

      .format("HH:mm:ss");
    const LocalappointmentEndTime = moment
      .utc(endTime)

      .format("HH:mm:ss");
    // console.log("LocalappointmentStartTime:", LocalappointmentStartTime); // Will log based on your system's time zone
    // console.log("LocalappointmentEndTime:", LocalappointmentEndTime);
    console.log(
      "parsedStartTime:",
      moment.utc(parsedStartTime).format("HH:mm:ss")
    );
    console.log("parsedEndTime:", moment.utc(parsedEndTime).format("HH:mm:ss"));
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("unavailableDoctorOneDay", unavailableDoctorOneDay);
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("unavailableDoctorStartTime", unavailableDoctorStartTime);
    console.log("unavailableDoctorEndTime", unavailableDoctorEndTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("Doctor Start Time", doctorStartTime);
    console.log("Doctor End Time", doctorEndTime);

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
    console.log("appointmentScheduleDate", appointmentScheduleDate);

    const doctorAppointments = await Prisma.appointment.findMany({
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
      throw new GraphQLError(
        " The selected time slot is already booked by another patient. Please select a different time."
      );
    }

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
    const checkDoctorUnAvailability = await Prisma.unavailabilitySlot.findFirst(
      {
        where: {
          doctorId,
        },
      }
    );
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
    if (!checkDoctorAvailability) {
      throw new GraphQLError("Doctor availability not found!");
    }

    const doctorStartTime = moment
      .utc(checkDoctorAvailability?.startTime)
      .format("HH:mm:ss");
    const doctorEndTime = moment
      .utc(checkDoctorAvailability?.endTime)
      .format("HH:mm:ss");
    const appointmentScheduleDate = moment(scheduledDate).format("YYYY-MM-DD");
    const appointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
    const appointmentEndTime = moment.utc(endTime).format("HH:mm:ss");
    const LocalappointmentStartTime = moment
      .utc(startTime)

      .format("HH:mm:ss");
    const LocalappointmentEndTime = moment
      .utc(endTime)

      .format("HH:mm:ss");
    console.log(
      "parsedStartTime:",
      moment.utc(parsedStartTime).format("HH:mm:ss")
    );
    console.log("parsedEndTime:", moment.utc(parsedEndTime).format("HH:mm:ss"));
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("unavailableDoctorOneDay", unavailableDoctorOneDay);
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("unavailableDoctorStartTime", unavailableDoctorStartTime);
    console.log("unavailableDoctorEndTime", unavailableDoctorEndTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("Doctor Start Time", doctorStartTime);
    console.log("Doctor End Time", doctorEndTime);

    if (
      !(
        doctorStartTime <= appointmentStartTime &&
        doctorEndTime >= appointmentEndTime
      )
    ) {
      throw new GraphQLError("Doctor is not available at this time");
    }
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
    console.log("appointmentScheduleDate", appointmentScheduleDate);

    const doctorAppointments = await Prisma.appointment.findMany({
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
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async cancelAppointment(@Arg("PatientId") patientId: number) {
    await Prisma.appointment.update({
      where: {
        id: patientId,
      },
      data: {
        status: "CANCELLED",
      },
    });
    return "Appointment Cancel";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async completeAppointment(@Arg("PatientId") patientId: number) {
    await Prisma.appointment.update({
      where: {
        id: patientId,
      },
      data: {
        status: "COMPLETED",
      },
    });
    return "Appointment Completed";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async rescheduleAppointment(
    @Arg("PatientId") patientId: number,
    @Arg("scheduledDate") scheduledDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Ctx() context: Context
  ) {
    if (context.payload.role !== "PATIENT") {
      throw new GraphQLError(
        "You have not access to reschedule this appointment"
      );
    }
    if (!context.payload.userId) {
      throw new GraphQLError("User not found!");
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

    const doctor = await Prisma.appointment.findUnique({
      where: { id: patientId },
    });
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
    if (parsedStartTime >= parsedEndTime) {
      throw new GraphQLError(
        "Start time must be before end time on the same day."
      );
    }
    const checkDoctorAvailability = await Prisma.availabilitySlot.findFirst({
      where: {
        doctorId: doctor.doctorId,
      },
    });
    const checkDoctorUnAvailability = await Prisma.unavailabilitySlot.findFirst(
      {
        where: {
          doctorId: doctor.doctorId,
        },
      }
    );
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
      console.log("Doctor ID ", doctor.doctorId);

      throw new GraphQLError("Doctor availability not found!");
    }

    const doctorStartTime = moment
      .utc(checkDoctorAvailability?.startTime)
      .format("HH:mm:ss");
    const doctorEndTime = moment
      .utc(checkDoctorAvailability?.endTime)
      .format("HH:mm:ss");
    const appointmentScheduleDate = moment(scheduledDate).format("YYYY-MM-DD");
    const appointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
    const appointmentEndTime = moment.utc(endTime).format("HH:mm:ss");
    const LocalappointmentStartTime = moment.utc(startTime).format("HH:mm:ss");
    const LocalappointmentEndTime = moment.utc(endTime).format("HH:mm:ss");
    // console.log("LocalappointmentStartTime:", LocalappointmentStartTime); // Will log based on your system's time zone
    // console.log("LocalappointmentEndTime:", LocalappointmentEndTime);
    console.log(
      "parsedStartTime:",
      moment.utc(parsedStartTime).format("HH:mm:ss")
    );
    console.log("parsedEndTime:", moment.utc(parsedEndTime).format("HH:mm:ss"));
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("unavailableDoctorOneDay", unavailableDoctorOneDay);
    console.log("appointmentStartTime", appointmentStartTime);
    console.log("unavailableDoctorStartTime", unavailableDoctorStartTime);
    console.log("unavailableDoctorEndTime", unavailableDoctorEndTime);
    console.log("appointmentEndTime", appointmentEndTime);
    console.log("Doctor Start Time", doctorStartTime);
    console.log("Doctor End Time", doctorEndTime);

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
    console.log("appointmentScheduleDate", appointmentScheduleDate);

    const doctorAppointments = await Prisma.appointment.findMany({
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
      throw new GraphQLError(
        " The selected time slot is already booked by another patient. Please select a different time."
      );
    }

    await Prisma.appointment.update({
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
  
}
cronAppointments;
