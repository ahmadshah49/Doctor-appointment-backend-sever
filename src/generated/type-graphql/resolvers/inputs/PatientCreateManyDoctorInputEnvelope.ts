import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateManyDoctorInput } from "../inputs/PatientCreateManyDoctorInput";

@TypeGraphQL.InputType("PatientCreateManyDoctorInputEnvelope", {})
export class PatientCreateManyDoctorInputEnvelope {
  @TypeGraphQL.Field(_type => [PatientCreateManyDoctorInput], {
    nullable: false
  })
  data!: PatientCreateManyDoctorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
