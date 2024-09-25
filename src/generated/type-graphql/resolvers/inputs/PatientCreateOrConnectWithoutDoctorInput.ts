import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutDoctorInput } from "../inputs/PatientCreateWithoutDoctorInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutDoctorInput", {})
export class PatientCreateOrConnectWithoutDoctorInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: PatientCreateWithoutDoctorInput;
}
