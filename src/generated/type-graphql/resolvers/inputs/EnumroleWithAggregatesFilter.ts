import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumroleFilter } from "../inputs/NestedEnumroleFilter";
import { NestedEnumroleWithAggregatesFilter } from "../inputs/NestedEnumroleWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("EnumroleWithAggregatesFilter", {})
export class EnumroleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  equals?: "DOCTOR" | "PATIENT" | undefined;

  @TypeGraphQL.Field(_type => [role], {
    nullable: true
  })
  in?: Array<"DOCTOR" | "PATIENT"> | undefined;

  @TypeGraphQL.Field(_type => [role], {
    nullable: true
  })
  notIn?: Array<"DOCTOR" | "PATIENT"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumroleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumroleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumroleFilter, {
    nullable: true
  })
  _min?: NestedEnumroleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumroleFilter, {
    nullable: true
  })
  _max?: NestedEnumroleFilter | undefined;
}
