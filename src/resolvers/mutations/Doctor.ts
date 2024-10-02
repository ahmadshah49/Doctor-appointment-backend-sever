import { GraphQLError } from "graphql";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Context } from "../../context/Context";
import { Doctor, gender } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { ImageUploader } from "../../utils/ImageUploader";

@Resolver(() => Doctor)
export class DoctorResolver {
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
    let imageUrl = null;
    if (profilePhoto) {
      try {
        imageUrl = await ImageUploader(profilePhoto);
      } catch (error) {
        throw new GraphQLError(
          "Error uploading profile picture: ",
          error.message
        );
      }
    }
    await Prisma.doctor.create({
      data: {
        address,
        email,
        gender,
        name,
        availability,
        isAvailable,
        profilePhoto: imageUrl || null,
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
    let imageUrl = null;
    if (profilePhoto) {
      try {
        imageUrl = await ImageUploader(profilePhoto);
      } catch (error) {
        throw new GraphQLError(
          "Error uploading profile picture: ",
          error.message
        );
      }
    }
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
        profilePhoto: imageUrl || null,
        userId: currentUserId,
      },
    });
    return "Data Updated";
  }
}
