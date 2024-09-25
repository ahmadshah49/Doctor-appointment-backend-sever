import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutDoctorInput } from "../inputs/AppointmentCreateWithoutDoctorInput";
import { AppointmentUpdateWithoutDoctorInput } from "../inputs/AppointmentUpdateWithoutDoctorInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpsertWithWhereUniqueWithoutDoctorInput", {})
export class AppointmentUpsertWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutDoctorInput, {
    nullable: false
  })
  update!: AppointmentUpdateWithoutDoctorInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutDoctorInput;
}
