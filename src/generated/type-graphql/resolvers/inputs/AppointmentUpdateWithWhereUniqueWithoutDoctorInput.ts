import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateWithoutDoctorInput } from "../inputs/AppointmentUpdateWithoutDoctorInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateWithWhereUniqueWithoutDoctorInput", {})
export class AppointmentUpdateWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: AppointmentUpdateWithoutDoctorInput;
}
