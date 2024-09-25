import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutPatientsInput } from "../inputs/DoctorCreateWithoutPatientsInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutPatientsInput", {})
export class DoctorCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutPatientsInput;
}
