import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCountAppointmentsArgs } from "./args/PatientCountAppointmentsArgs";

@TypeGraphQL.ObjectType("PatientCount", {})
export class PatientCount {
  appointments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "appointments",
    nullable: false
  })
  getAppointments(@TypeGraphQL.Root() root: PatientCount, @TypeGraphQL.Args() args: PatientCountAppointmentsArgs): number {
    return root.appointments;
  }
}
