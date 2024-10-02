import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { AvailabilitySlot } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { sendAppointmentCancelEmail } from "../../utils/SendAppointmentCancelEmail";
import { DateNotinPastforDoctor } from "../../validations/Validation";

@Resolver(() => AvailabilitySlot)
export class DoctorAvailabilityResvolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async AddDoctorAvailability(
    @Ctx() context: Context,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
    }

    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end time");
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

    if (
      parsedStartTime.getTime() === parsedEndTime.getTime() &&
      parsedStartTime >= parsedEndTime
    ) {
      throw new GraphQLError(
        "Start time must be before end time on the same day."
      );
    }

    const currentUserId = context.payload.userId;
    console.log("currentUserId", currentUserId);

    const doctor = await Prisma.doctor.findUnique({
      where: { userId: currentUserId },
    });
    console.log("Doctor Id", doctor.userId);

    if (!doctor) {
      throw new GraphQLError("Doctor not found");
    }
    const existingAvailabilitySlot = await Prisma.availabilitySlot.findUnique({
      where: {
        doctorId: currentUserId,
      },
    });
    if (existingAvailabilitySlot) {
      throw new GraphQLError(
        "Availability slot already exists for this doctor. Please update the existing slot instead of creating a new one."
      );
    }
    await Prisma.availabilitySlot.create({
      data: {
        startTime: parsedStartTime,
        endTime: parsedEndTime,
        isBooked: isBooked ?? false,
        doctorId: currentUserId,
      },
    });
    return "Availability Slot Added";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async updateDoctorAvailability(
    @Ctx() context: Context,

    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
    }

    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end time");
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

    const currentUserId = context.payload.userId;
    console.log("currentUserId", currentUserId);

    const doctor = await Prisma.doctor.findUnique({
      where: { userId: currentUserId },
    });
    console.log("Doctor Id", doctor.userId);

    if (!doctor) {
      throw new GraphQLError("Doctor not found");
    }
    await Prisma.availabilitySlot.update({
      where: {
        doctorId: currentUserId,
      },
      data: {
        startTime: parsedStartTime,
        endTime: parsedEndTime,
        isBooked: isBooked ?? false,
        doctorId: currentUserId,
      },
    });
    return "availabilitySlot Updated";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async addDoctorUnavailability(
    @Ctx() context: Context,
    @Arg("doctorId") doctorId: number,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("startDate", { nullable: true }) startDate: string,
    @Arg("endDate", { nullable: true }) endDate: string,
    @Arg("reason", { nullable: true }) reason: string,
    @Arg("isAvailable", { nullable: true }) isAvailable: boolean
  ) {
    if (!doctorId || !startTime || !endTime) {
      throw new GraphQLError("Please Add doctor id ,start time and end time");
    }
    if (new Date(startDate) >= new Date(endDate)) {
      throw new GraphQLError("Start date must be before end date");
    }
    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end time");
    }
    if (!isValid(parseISO(startDate))) {
      throw new GraphQLError(
        "Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
      );
    }
    if (!isValid(parseISO(endDate))) {
      throw new GraphQLError(
        "Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
      );
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
    const currentUserId = context.payload?.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }
    const existingUnavailabilitySlot =
      await Prisma.unavailabilitySlot.findUnique({
        where: {
          doctorId: currentUserId,
        },
      });
    if (existingUnavailabilitySlot) {
      throw new GraphQLError(
        "Unavailability slot already exists for this doctor. Please update the existing slot instead of creating a new one."
      );
    }
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
    DateNotinPastforDoctor({
      startTime: parsedStartTime,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      endTime: parsedEndTime,
    });
    await Prisma.unavailabilitySlot.create({
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
    const affectedAppointments = await Prisma.appointment.findMany({
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
      await Prisma.appointment.update({
        where: { id: appointment.id },
        data: { status: "CANCELLED" },
      });
      sendAppointmentCancelEmail(
        appointment.email,
        appointment.scheduledDate,
        appointment.fullName
      );
      return "Unavailability Added";
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async updateDoctorUnavailability(
    @Ctx() context: Context,
    @Arg("doctorId") doctorId: number,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("startDate", { nullable: true }) startDate: string,
    @Arg("endDate", { nullable: true }) endDate: string,
    @Arg("reason", { nullable: true }) reason: string,
    @Arg("isAvailable", { nullable: true }) isAvailable: boolean
  ) {
    if (!doctorId || !startTime || !endTime) {
      throw new GraphQLError("Please Add doctor id ,start time and end time");
    }
    if (new Date(startDate) >= new Date(endDate)) {
      throw new GraphQLError("Start date must be before end time");
    }
    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end date");
    }

    if (!isValid(parseISO(startDate))) {
      throw new GraphQLError(
        "Invalid startDate format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
      );
    }
    if (!isValid(parseISO(endDate))) {
      throw new GraphQLError(
        "Invalid endDate format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
      );
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

    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
    DateNotinPastforDoctor({
      startTime: parsedStartTime,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      endTime: parsedEndTime,
    });
    const currentUserId = context.payload.userId;

    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }
    await Prisma.unavailabilitySlot.update({
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
    const affectedAppointments = await Prisma.appointment.findMany({
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
      await Prisma.appointment.update({
        where: { id: appointment.id },
        data: { status: "CANCELLED" },
      });
      sendAppointmentCancelEmail(
        appointment.email,
        appointment.scheduledDate,
        appointment.fullName
      );
    }
    return "Unavailability Updated";
  }
}
