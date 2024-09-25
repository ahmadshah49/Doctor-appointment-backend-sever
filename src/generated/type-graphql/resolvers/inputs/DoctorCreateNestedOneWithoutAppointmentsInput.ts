import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutAppointmentsInput } from "../inputs/DoctorCreateOrConnectWithoutAppointmentsInput";
import { DoctorCreateWithoutAppointmentsInput } from "../inputs/DoctorCreateWithoutAppointmentsInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutAppointmentsInput", {})
export class DoctorCreateNestedOneWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutAppointmentsInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutAppointmentsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
