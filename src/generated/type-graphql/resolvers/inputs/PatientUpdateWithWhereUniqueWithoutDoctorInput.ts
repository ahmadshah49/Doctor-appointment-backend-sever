import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutDoctorInput } from "../inputs/PatientUpdateWithoutDoctorInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateWithWhereUniqueWithoutDoctorInput", {})
export class PatientUpdateWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutDoctorInput;
}
