import { GraphQLError } from "graphql";
import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";

import { Doctor } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { Context } from "../../context/Context";

@Resolver(() => Doctor)
export class Doctors {
  @Query(() => [Doctor])
  @UseMiddleware(isAuth)
  async allDoctor() {
    try {
      const doctor = await Prisma.doctor.findMany({});
      return doctor;
    } catch (error) {
      throw new GraphQLError("Error While Getting doctors");
    }
  }
  @Query(() => [Doctor])
  @UseMiddleware(isAuth)
  async searchDoctors(@Arg("search") search: string) {
    try {
      const searchDoctors = await Prisma.doctor.findMany({
        where: {
          ...(search && {
            OR: [
              {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }),
        },
      });
      return searchDoctors;
    } catch (error) {
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => Doctor)
  @UseMiddleware(isAuth, isDoctor)
  async getDoctor(@Ctx() context: Context) {
    try {
      if (context.payload.role !== "DOCTOR") {
        throw new GraphQLError(
          "You are not authorized to access this resource."
        );
      }
      const userId = context.payload.userId;
      const doctor = await Prisma.doctor.findUnique({
        where: {
          userId,
        },
      });

      return doctor;
    } catch (error) {
      console.log("error", error);

      throw new GraphQLError(error.message || "Something went wrong!");
    }
  }
}
