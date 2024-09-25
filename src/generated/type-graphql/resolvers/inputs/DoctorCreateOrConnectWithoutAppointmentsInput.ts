import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutAppointmentsInput } from "../inputs/DoctorCreateWithoutAppointmentsInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutAppointmentsInput", {})
export class DoctorCreateOrConnectWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutAppointmentsInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutAppointmentsInput;
}
