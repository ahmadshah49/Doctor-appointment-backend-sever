import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateWithoutPatientInput } from "../inputs/AppointmentUpdateWithoutPatientInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateWithWhereUniqueWithoutPatientInput", {})
export class AppointmentUpdateWithWhereUniqueWithoutPatientInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutPatientInput, {
    nullable: false
  })
  data!: AppointmentUpdateWithoutPatientInput;
}
