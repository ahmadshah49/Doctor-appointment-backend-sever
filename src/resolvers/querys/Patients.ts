import { GraphQLError } from "graphql";
import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";

import { Context } from "../../context/Context";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";
import { validateUserRole } from "../../validations/Validation";

@Resolver(() => Patient)
export class Patients {
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async getPatientsByDoctor(@Ctx() context: Context) {
    try {
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      await validateUserRole(context);
      const distinctPatients = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
        },
        distinct: ["patientId"],
        select: {
          patientId: true,
        },
      });

      const patientIds = distinctPatients.map(
        (appointment) => appointment.patientId
      );

      const patients = await Prisma.patient.findMany({
        where: {
          userId: {
            in: patientIds,
          },
        },
      });
      return patients;
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async getFilteredPatients(
    @Arg("gender", () => gender) gender: gender,
    @Arg("minAge", { nullable: true }) minAge: number,
    @Arg("maxAge", { nullable: true }) maxAge: number,
    @Ctx() context: Context
  ) {
    try {
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      await validateUserRole(context);
      const distinctPatients = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
        },
        distinct: ["patientId"],
        select: {
          patientId: true,
        },
      });
      if (distinctPatients.length === 0) {
        return [];
      }

      const patientIds = distinctPatients.map(
        (appointment) => appointment.patientId
      );

      const patients = await Prisma.patient.findMany({
        where: {
          userId: {
            in: patientIds,
          },
          gender: gender || undefined,
        },
      });
      const filteredPatients = patients.filter((patient) => {
        const age = parseInt(patient.age);
        if (isNaN(age)) return false;

        const withinMinAge = minAge ? age >= minAge : true;
        const withinMaxAge = maxAge ? age <= maxAge : true;

        return withinMinAge && withinMaxAge;
      });

      return filteredPatients;
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => Patient)
  @UseMiddleware(isAuth, isDoctor)
  async getAppointmentByPatient(
    @Ctx() context: Context,
    @Arg("patientId") patientId: number
  ) {
    try {
      await validateUserRole(context);
      const checkPatientExistence = await Prisma.patient.findUnique({
        where: { id: patientId },
      });

      if (!checkPatientExistence) {
        throw new GraphQLError("Patient not found");
      }

      const patient = await Prisma.patient.findUnique({
        where: { id: patientId },
        include: {
          appointments: true,
        },
      });
      return patient;
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async searchPatientsByDoctor(
    @Ctx() context: Context,
    @Arg("search") search: string
  ) {
    await validateUserRole(context);
    try {
      const currentUserId = context.payload.userId;
      if (!currentUserId) {
        throw new GraphQLError("User not found");
      }
      if (!search || search.trim() === "") {
        return [];
      }
      const distinctPatients = await Prisma.appointment.findMany({
        where: {
          doctorId: currentUserId,
        },
        distinct: ["patientId"],
        select: {
          patientId: true,
        },
      });

      const patientIds = distinctPatients.map(
        (appointment) => appointment.patientId
      );

      const searchedPatients = await Prisma.patient.findMany({
        where: {
          userId: {
            in: patientIds,
          },
          ...(search && {
            OR: [
              {
                fullName: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }),
        },
      });

      return searchedPatients;
    } catch (error) {
      throw new GraphQLError(error.message || "An unexpected error occurred.");
    }
  }
  @Query(() => Patient, { nullable: true })
  @UseMiddleware(isAuth)
  async getPatient(@Ctx() context: Context) {
    try {
      if (context.payload.role !== "PATIENT") {
        throw new GraphQLError(
          "You are not authorized to access this resource."
        );
      }
      const userId = context.payload.userId;
      const patient = await Prisma.patient.findUnique({
        where: {
          userId,
        },
      });

      return patient;
    } catch (error) {
      throw new GraphQLError(error.message || "Something went wrong!");
    }
  }
  @Query(() => Patient)
  @UseMiddleware(isAuth)
  async getSinglePatient(@Arg("id") id: number) {
    try {
      const patient = await Prisma.patient.findUnique({
        where: {
          id,
        },
      });
      if (!patient) {
        throw new GraphQLError("User not found!");
      }
      return patient;
    } catch (error) {
      throw new GraphQLError(error.message || "Something went wrong!");
    }
  }
}
