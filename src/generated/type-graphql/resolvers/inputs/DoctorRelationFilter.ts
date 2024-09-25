import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorRelationFilter", {})
export class DoctorRelationFilter {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  is?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  isNot?: DoctorWhereInput | undefined;
}
