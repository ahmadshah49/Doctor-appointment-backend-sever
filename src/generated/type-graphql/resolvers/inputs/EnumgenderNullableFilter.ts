import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumgenderNullableFilter } from "../inputs/NestedEnumgenderNullableFilter";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("EnumgenderNullableFilter", {})
export class EnumgenderNullableFilter {
  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  equals?: "MAlE" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  in?: Array<"MAlE" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  notIn?: Array<"MAlE" | "FEMALE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderNullableFilter, {
    nullable: true
  })
  not?: NestedEnumgenderNullableFilter | undefined;
}
