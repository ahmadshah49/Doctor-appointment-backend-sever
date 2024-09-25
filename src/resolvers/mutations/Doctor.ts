import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Doctor, gender } from "../../generated/type-graphql";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import Prisma from "../../lib/prisma";
import { GraphQLError } from "graphql";
import { Context } from "../../context/Context";
import { DoctorTypes } from "../../types/ResolverTypes";
import { ImageUploader } from "../../utils/ImageUploader";

@Resolver(() => Doctor)
export class DoctorResolver {
  @Query(() => [Doctor])
  @UseMiddleware(isAuth)
  async allDoctor() {
    try {
      const doctor = await Prisma.doctor.findMany();
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
  
}
