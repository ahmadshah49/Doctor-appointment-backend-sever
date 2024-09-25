import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumgenderNullableFilter } from "../inputs/NestedEnumgenderNullableFilter";
import { NestedEnumgenderNullableWithAggregatesFilter } from "../inputs/NestedEnumgenderNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("EnumgenderNullableWithAggregatesFilter", {})
export class EnumgenderNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  equals?: "MAlE" | "FEMALE" | "OTHERS" | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  in?: Array<"MAlE" | "FEMALE" | "OTHERS"> | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  notIn?: Array<"MAlE" | "FEMALE" | "OTHERS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumgenderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumgenderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumgenderNullableFilter | undefined;
}
