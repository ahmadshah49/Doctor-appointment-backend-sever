import { GraphQLError } from "graphql";
import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";

import { Doctor } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth } from "../../middleware/MiddleWare";

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
}
