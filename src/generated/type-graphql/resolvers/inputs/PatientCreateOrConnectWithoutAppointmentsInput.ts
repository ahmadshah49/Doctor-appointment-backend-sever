import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutAppointmentsInput } from "../inputs/PatientCreateWithoutAppointmentsInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutAppointmentsInput", {})
export class PatientCreateOrConnectWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutAppointmentsInput, {
    nullable: false
  })
  create!: PatientCreateWithoutAppointmentsInput;
}
