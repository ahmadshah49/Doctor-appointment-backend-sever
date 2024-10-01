import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Appointment } from "../../generated/type-graphql";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { Context } from "../../context/Context";
import { GraphQLError } from "graphql";
import Prisma from "../../lib/prisma";

@Resolver(() => Appointment)
export class GetAppointmentsResolver {
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAppointmentsByDoctor(@Ctx() context: Context) {
    const currentUserId = context.payload.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
    }
    const appointments = await Prisma.appointment.findMany({
      where: {
        doctorId: currentUserId,
      },
    });
    return appointments;
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayUpcomingAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayCompletedAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getTodayMissedAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllMissedAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllUpcomingAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async getAllCompletedAppointments(@Ctx() context: Context) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Appointment])
  @UseMiddleware(isAuth, isDoctor)
  async searchAppointments(
    @Ctx() context: Context,
    @Arg("search") search: string
  ) {
    try {
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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
}
