import { GraphQLError } from "graphql";
import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Context } from "../../context/Context";
import { gender, Patient } from "../../generated/type-graphql";
import Prisma from "../../lib/prisma";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";

@Resolver(() => Patient)
export class Patients {
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async getPatientsByDoctor(@Ctx() context: Context) {
    const currentUserId = context.payload.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
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
    console.log("PatientIds", patientIds);

    const patients = await Prisma.patient.findMany({
      where: {
        userId: {
          in: patientIds,
        },
      },
    });
    return patients;
  }
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async getFilteredPatients(
    @Arg("gender", () => gender, { nullable: true }) gender: gender,
    @Arg("minAge", { nullable: true }) minAge: number,
    @Arg("maxAge", { nullable: true }) maxAge: number,
    @Ctx() context: Context
  ) {
    const currentUserId = context.payload.userId;
    if (!currentUserId) {
      throw new GraphQLError("User not found");
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
    if (distinctPatients.length === 0) {
      return [];
    }

    const patientIds = distinctPatients.map(
      (appointment) => appointment.patientId
    );
    console.log("PatientIds", patientIds);

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
  }
  @Query(() => Patient)
  @UseMiddleware(isAuth, isDoctor)
  async getAppointmentByPatient(
    @Ctx() context: Context,
    @Arg("patientId") patientId: number
  ) {
    try {
      const patient = await Prisma.patient.findUnique({
        where: { id: patientId },
        include: {
          appointments: true,
        },
      });
      if (!patient) {
        throw new GraphQLError("Patient not found");
      }
      return patient;
    } catch (error) {
      console.log("Error", error);
      throw new GraphQLError("Something went wrong");
    }
  }
  @Query(() => [Patient])
  @UseMiddleware(isAuth, isDoctor)
  async searchPatientsByDoctor(
    @Ctx() context: Context,
    @Arg("search") search: string
  ) {
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
    console.log("PatientIds", patientIds);

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
  }
}
