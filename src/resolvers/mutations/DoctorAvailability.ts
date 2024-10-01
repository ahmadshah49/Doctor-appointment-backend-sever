import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { AvailabilitySlot } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { sendAppointmentCancelEmail } from "../../utils/SendAppointmentCancelEmail";

@Resolver(() => AvailabilitySlot)
export class DoctorAvailabilityResvolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async AddDoctorAvailability(
    @Ctx() context: Context,

    // @Arg("startDate") startDate: string,
    // @Arg("endDate") endDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    // if (!startDate) {
    //   throw new GraphQLError("Please add an availability start day");
    // }
    // if (!endDate) {
    //   throw new GraphQLError("Please add an availability end day");
    // }
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
    }
    // if (new Date(startDate) >= new Date(endDate)) {
    //   throw new GraphQLError("Start date must be before end date");
    // }
    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end time");
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

    // const parsedStartDate = parseISO(startDate);
    // const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);

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
    await Prisma.availabilitySlot.create({
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
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async updateDoctorAvailability(
    @Ctx() context: Context,

    // @Arg("startDate") startDate: string,
    // @Arg("endDate") endDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    // if (!startDate) {
    //   throw new GraphQLError("Please add an availability start day");
    // }
    // if (!endDate) {
    //   throw new GraphQLError("Please add an availability end day");
    // }
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
    }
    // if (new Date(startDate) >= new Date(endDate)) {
    //   throw new GraphQLError("Start date must be before end date");
    // }
    if (new Date(startTime) >= new Date(endTime)) {
      throw new GraphQLError("Start time must be before end time");
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

    // const parsedStartDate = parseISO(startDate);
    // const parsedEndDate = parseISO(endDate);
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
    const currentUserId = context.payload?.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);
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
      throw new GraphQLError("Start date must be before end date");
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
