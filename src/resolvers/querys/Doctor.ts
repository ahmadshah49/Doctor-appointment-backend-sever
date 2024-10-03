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
      console.log("Doctor", doctor);
      return doctor;
    } catch (error) {
      console.log("Error While Getting doctors", error);

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
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
}
