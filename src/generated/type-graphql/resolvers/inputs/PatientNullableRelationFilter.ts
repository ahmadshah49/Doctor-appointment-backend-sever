import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientNullableRelationFilter", {})
export class PatientNullableRelationFilter {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  is?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  isNot?: PatientWhereInput | undefined;
}
