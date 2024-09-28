import { isValid, parseISO } from "date-fns";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { AvailabilitySlot } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";

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

    // Check that startDate is not after endDate
    // if (parsedStartDate > parsedEndDate) {
    //   throw new GraphQLError("Start date must be before or equal to end date.");
    // }

    // // Check that startTime is not after endTime on the same day
    // if (
    //   parsedStartDate.getTime() === parsedEndDate.getTime() &&
    //   parsedStartTime >= parsedEndTime
    // ) {
    //   throw new GraphQLError(
    //     "Start time must be before end time on the same day."
    //   );
    // }

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
}
