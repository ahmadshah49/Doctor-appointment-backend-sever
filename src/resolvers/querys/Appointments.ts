import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Appointment } from "../../generated/type-graphql";

import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { Context } from "../../context/Context";
import { GraphQLError } from "graphql";
import Prisma from "../../lib/prisma";
import { validateUserRole } from "../../validations/Validation";

@Resolver(() => Appointment)
export class GetAppointmentsResolver {
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAppointmentsByDoctor(@Ctx() context: Context) {
    try {
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      await validateUserRole(context);

      const appointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
        },
      });
      return appointments;
    } catch (error) {
      console.error("Error in getAppointmentsByDoctor:", error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayUpcomingAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date();
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(today.getDate() + 1);
      console.log("Today", today);
      console.log("Tomorrow", tomorrow);

      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const upcommingAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "UPCOMING",
          scheduledDate: {
            gte: today,
            lt: tomorrow,
          },
        },
      });
      return upcommingAppointments;
    } catch (error) {
      console.error(
        "Error while getting today upcomming appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayCompletedAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date();
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(today.getDate() + 1);
      console.log("Today", today);
      console.log("Tomorrow", tomorrow);

      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const compeltedAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "COMPLETED",
          scheduledDate: {
            gte: today,
            lt: tomorrow,
          },
        },
      });
      return compeltedAppointments;
    } catch (error) {
      console.error(
        "Error while getting today completed appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayMissedAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date();
      tomorrow.setHours(0, 0, 0, 0);
      tomorrow.setDate(today.getDate() + 1);
      console.log("Today", today);
      console.log("Tomorrow", tomorrow);

      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const missedAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "MISSED",
          scheduledDate: {
            gte: today,
            lt: tomorrow,
          },
        },
      });
      return missedAppointments;
    } catch (error) {
      console.log(
        "Error while  geting Today Missed Appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllMissedAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const missedAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "MISSED",
        },
      });
      return missedAppointments;
    } catch (error) {
      console.log(
        "Error while  geting All Missed Appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllUpcomingAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const upcommingAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "UPCOMING",
        },
      });
      return upcommingAppointments;
    } catch (error) {
      console.log(
        "Error while  geting All Upcommig Appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllCompletedAppointments(@Ctx() context: Context) {
    try {
      await validateUserRole(context);
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const completedAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          status: "COMPLETED",
        },
      });
      return completedAppointments;
    } catch (error) {
      console.log(
        "Error while  geting All Completed Appointments".toUpperCase(),
        error
      );
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async searchAppointments(
    @Ctx() context: Context,
    @Arg("search") search: string
  ) {
    try {
      await validateUserRole(context);
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      const searchAppointments = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
          ...(search && {
            OR: [
              {
                Patient: {
                  fullName: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              },
            ],
          }),
        },
      });
      return searchAppointments;
    } catch (error) {
      console.log("Error while searching Appointments".toUpperCase(), error);
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
}
