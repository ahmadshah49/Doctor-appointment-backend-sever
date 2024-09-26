import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { AvailabilitySlot, Doctor, gender } from "../../generated/type-graphql";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import Prisma from "../../lib/prisma";
import { GraphQLError } from "graphql";
import { Context } from "../../context/Context";
import { DoctorTypes } from "../../types/ResolverTypes";
import { ImageUploader } from "../../utils/ImageUploader";
import { isValid, parseISO } from "date-fns";

@Resolver(() => Doctor)
export class DoctorResolver {
  @Query(() => [Doctor])
  @UseMiddleware(isAuth)
  async allDoctor() {
    try {
      const doctor = await Prisma.doctor.findMany({
        include: {
          AvailabilitySlot: true,
        },
      });
      console.log("Doctor", doctor);
      return doctor;
    } catch (error) {
      console.log("Error While Getting doctors", error);

      throw new GraphQLError("Error While Getting doctors");
    }
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async createDoctor(
    @Arg("name") name: string,
    @Arg("profilePhoto", { nullable: true }) profilePhoto: string,
    @Arg("address") address: string,
    @Arg("availability", { nullable: true }) availability: string,
    @Arg("email") email: string,
    @Arg("isAvailable", { nullable: true }) isAvailable: boolean,
    @Arg("gender", () => gender) gender: gender,
    @Ctx() context: Context
  ) {
    const currentUserId = context.payload?.userId;
    const dbUser = await Prisma.doctor.findUnique({
      where: {
        userId: currentUserId,
      },
    });
    if (dbUser) {
      throw new GraphQLError(
        "It looks like you’ve already set up your Doctor information. You can update your details instead of creating new ones."
      );
    }

    await Prisma.doctor.create({
      data: {
        address,
        email,
        gender,
        name,
        availability,
        isAvailable,
        profilePhoto,
        userId: currentUserId,
      },
    });
    return "Data Added";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async updateDoctor(
    @Arg("name", { nullable: true }) name: string,
    @Arg("profilePhoto", { nullable: true }) profilePhoto: string,
    @Arg("address", { nullable: true }) address: string,
    @Arg("availability", { nullable: true }) availability: string,
    @Arg("email", { nullable: true }) email: string,
    @Arg("isAvailable", { nullable: true }) isAvailable: boolean,
    @Arg("gender", () => gender, { nullable: true }) gender: gender,
    @Ctx() context: Context
  ) {
    const currentUserId = context.payload?.userId;
    const addProfileImage = await ImageUploader(profilePhoto);
    await Prisma.doctor.update({
      where: {
        userId: currentUserId,
      },

      data: {
        address,
        email,
        gender,
        name,
        availability,
        isAvailable,
        profilePhoto: addProfileImage || null,
        userId: currentUserId,
      },
    });
    return "Data Updated";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async AddDoctorAvailability(
    @Ctx() context: Context,

    @Arg("startDate") startDate: string,
    @Arg("endDate") endDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    if (!startDate) {
      throw new GraphQLError("Please add an availability start day");
    }
    if (!endDate) {
      throw new GraphQLError("Please add an availability end day");
    }
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
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

    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);

    // Check that startDate is not after endDate
    if (parsedStartDate > parsedEndDate) {
      throw new GraphQLError("Start date must be before or equal to end date.");
    }

    // Check that startTime is not after endTime on the same day
    if (
      parsedStartDate.getTime() === parsedEndDate.getTime() &&
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
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        startTime: parsedStartTime,
        endTime: parsedEndTime,
        isBooked: isBooked ?? false,
        doctorId: currentUserId,
      },
    });
    return "availabilitySlot Added";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth, isDoctor)
  async updateDoctorAvailability(
    @Ctx() context: Context,

    @Arg("startDate") startDate: string,
    @Arg("endDate") endDate: string,
    @Arg("startTime") startTime: string,
    @Arg("endTime") endTime: string,
    @Arg("isBooked", { nullable: true }) isBooked: boolean
  ) {
    if (!startDate) {
      throw new GraphQLError("Please add an availability start day");
    }
    if (!endDate) {
      throw new GraphQLError("Please add an availability end day");
    }
    if (!startTime) {
      throw new GraphQLError("Please add availability start time");
    }
    if (!endTime) {
      throw new GraphQLError("Please add availability end time");
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

    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    const parsedStartTime = parseISO(startTime);
    const parsedEndTime = parseISO(endTime);

    // Check that startDate is not after endDate
    if (parsedStartDate > parsedEndDate) {
      throw new GraphQLError("Start date must be before or equal to end date.");
    }

    // Check that startTime is not after endTime on the same day
    if (
      parsedStartDate.getTime() === parsedEndDate.getTime() &&
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
    await Prisma.availabilitySlot.update({
      where: {
        doctorId: currentUserId,
      },
      data: {
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        startTime: parsedStartTime,
        endTime: parsedEndTime,
        isBooked: isBooked ?? false,
        doctorId: currentUserId,
      },
    });
    return "availabilitySlot Added";
  }
}
