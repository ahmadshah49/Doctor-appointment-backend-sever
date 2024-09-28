import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth } from "../../middleware/MiddleWare";
import { ImageUploader } from "../../utils/ImageUploader";

@Resolver(() => Patient)
export class PatientResolver {
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async createPatient(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("email") email: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
  ) {
    if (context.payload.role !== "PATIENT") {
      throw new GraphQLError(
        "Your are not patient you can not register as a user"
      );
    }
    if (!phoneNo || !fullName || !age || !gender || !adress || !email) {
      throw new GraphQLError("Please add all fields");
    }
    const currentUserId = context.payload?.userId;
    const dbUser = await Prisma.patient.findUnique({
      where: {
        userId: currentUserId,
      },
    });
    if (dbUser) {
      throw new GraphQLError(
        "It looks like you’ve already set up your patient information. You can update your details instead of creating new ones."
      );
    }
    let imageUrl = null;
    if (profilePicture) {
      try {
        imageUrl = await ImageUploader(profilePicture);
      } catch (error) {
        throw new GraphQLError(
          "Error uploading profile picture: ",
          error.message
        );
      }
    }
    const user = await Prisma.patient.create({
      data: {
        address: adress,
        age: age,
        fullName: fullName,
        gender: gender,
        phoneNo: phoneNo,
        userId: currentUserId,
        email,
        profilePicture: imageUrl || null,
      },
    });

    return "Patient Created";
  }
  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updatePatientInfo(
    @Arg("phoneNo") phoneNo: string,
    @Arg("fullName") fullName: string,
    @Arg("age") age: string,
    @Arg("email") email: string,
    @Arg("gender", () => gender) gender: gender,
    @Arg("address") adress: string,
    @Arg("profilePicture", { nullable: true }) profilePicture: string,
    @Ctx() context: Context
  ) {
    if (!phoneNo || !fullName || !age || !gender || !adress || !email) {
      throw new GraphQLError("Please add all fields");
    }
    const currentUserId = context.payload?.userId;
    const addProfileImage = await ImageUploader(profilePicture);
    await Prisma.patient.update({
      where: {
        userId: currentUserId,
      },
      data: {
        address: adress,
        age: age,
        fullName: fullName,
        gender: gender,
        phoneNo: phoneNo,
        userId: currentUserId,
        profilePicture: addProfileImage || null,
      },
    });

    return "Patient Info Updated";
  }
  // @Mutation(() => String)
  // @UseMiddleware(isAuth)
  // async createAppointment(
  //   @Arg("fullName") fullName: string,
  //   @Arg("email") email: string,
  //   @Arg("age") age: string,
  //   @Arg("gender", () => gender) gender: gender,
  //   @Arg("phoneNo") phoneNo: string,
  //   @Arg("address") address: string,
  //   @Arg("medicalHistory", { nullable: true }) medicalHistory: string,
  //   @Arg("presciptions", () => [String], { nullable: true })
  //   presciptions: string[],
  //   @Arg("details", { nullable: true }) details: string,
  //   @Arg("scheduledDate") scheduledDate: Date,
  //   @Arg("startTime") startTime: Date,
  //   @Arg("endTime") endTime: Date,
  //   @Arg("doctorId") doctorId: number,
  //   @Ctx() context: Context
  //   // @Arg("patientId") patientId: number
  // ) {
  //   if (
  //     !fullName ||
  //     !email ||
  //     !age ||
  //     !gender ||
  //     !phoneNo ||
  //     !address ||
  //     !presciptions ||
  //     !scheduledDate ||
  //     !startTime ||
  //     !endTime
  //   ) {
  //     throw new GraphQLError("Please add all required Fields");
  //   }

  //   // const checkAnyExistingAppointment=await Prisma
  //   if (context.payload.role !== "PATIENT") {
  //     throw new GraphQLError("You are not patient so you can't di this action");
  //   }
  //   console.log("User Role", context.payload.role);
  //   const currentUserId = context.payload.userId;
  //   if (!currentUserId) {
  //     throw new GraphQLError("User not found");
  //   }
  //   console.log("Doctor id", doctorId);

  //   console.log("Current User Id", currentUserId);

  //   const checkDoctorId = await Prisma.doctor.findUnique({
  //     where: { userId: doctorId },
  //   });
  //   console.log("Doctor Id", checkDoctorId.id);
  //   console.log("Doctor", checkDoctorId);

  //   if (!checkDoctorId) {
  //     throw new GraphQLError("Doctor not found!");
  //   }
  //   // const checkDoctorAvailability = await Prisma.availabilitySlot.findUnique({
  //   //   where: {
  //   //     doctorId: doctorId,
  //   //     startDate: {
  //   //       lte: scheduledDate,
  //   //     },
  //   //     endDate: {
  //   //       gte: scheduledDate,
  //   //     },
  //   //   },
  //   // });
  //   // if (checkDoctorAvailability) {
  //   //   throw new GraphQLError(
  //   //     "Doctor is Not Availbaile at your selectedTime Please chose another one"
  //   //   );
  //   // }
  //   await Prisma.appointment.create({
  //     data: {
  //       address,
  //       age,
  //       email,
  //       fullName,
  //       gender,
  //       phoneNo,
  //       details,
  //       presciptions,
  //       startTime,
  //       endTime,
  //       scheduledDate,
  //       patientId: currentUserId,
  //       doctorId,
  //     },
  //   });
  //   return "Appointment Added";
  // }
}
