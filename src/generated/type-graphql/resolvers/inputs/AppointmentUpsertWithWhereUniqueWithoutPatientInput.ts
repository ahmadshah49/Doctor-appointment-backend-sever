import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutPatientInput } from "../inputs/AppointmentCreateWithoutPatientInput";
import { AppointmentUpdateWithoutPatientInput } from "../inputs/AppointmentUpdateWithoutPatientInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpsertWithWhereUniqueWithoutPatientInput", {})
export class AppointmentUpsertWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutPatientInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutPatientInput;
}
