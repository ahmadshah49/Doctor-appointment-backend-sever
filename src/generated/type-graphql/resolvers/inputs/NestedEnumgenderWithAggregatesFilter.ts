import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumgenderFilter } from "../inputs/NestedEnumgenderFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("NestedEnumgenderWithAggregatesFilter", {})
export class NestedEnumgenderWithAggregatesFilter {
  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  equals?: "MALE" | "FEMALE" | "OTHERS" | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  in?: Array<"MALE" | "FEMALE" | "OTHERS"> | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  notIn?: Array<"MALE" | "FEMALE" | "OTHERS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumgenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderFilter, {
    nullable: true
  })
  _min?: NestedEnumgenderFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderFilter, {
    nullable: true
  })
  _max?: NestedEnumgenderFilter | undefined;
}
