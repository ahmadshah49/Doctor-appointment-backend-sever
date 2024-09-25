import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCountAppointmentsArgs } from "./args/DoctorCountAppointmentsArgs";
import { DoctorCountPatientsArgs } from "./args/DoctorCountPatientsArgs";

@TypeGraphQL.ObjectType("DoctorCount", {})
export class DoctorCount {
  patients!: number;
  appointments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "patients",
    nullable: false
  })
  getPatients(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountPatientsArgs): number {
    return root.patients;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "appointments",
    nullable: false
  })
  getAppointments(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountAppointmentsArgs): number {
    return root.appointments;
  }
}
