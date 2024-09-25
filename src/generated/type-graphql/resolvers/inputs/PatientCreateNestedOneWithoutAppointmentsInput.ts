import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutAppointmentsInput } from "../inputs/PatientCreateOrConnectWithoutAppointmentsInput";
import { PatientCreateWithoutAppointmentsInput } from "../inputs/PatientCreateWithoutAppointmentsInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedOneWithoutAppointmentsInput", {})
export class PatientCreateNestedOneWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutAppointmentsInput, {
    nullable: true
  })
  create?: PatientCreateWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutAppointmentsInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;
}
