import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutPatientsInput } from "../inputs/DoctorCreateOrConnectWithoutPatientsInput";
import { DoctorCreateWithoutPatientsInput } from "../inputs/DoctorCreateWithoutPatientsInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutPatientsInput", {})
export class DoctorCreateNestedOneWithoutPatientsInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutPatientsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
