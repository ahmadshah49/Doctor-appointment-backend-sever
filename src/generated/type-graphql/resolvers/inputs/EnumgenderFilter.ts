import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumgenderFilter } from "../inputs/NestedEnumgenderFilter";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("EnumgenderFilter", {})
export class EnumgenderFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumgenderFilter, {
    nullable: true
  })
  not?: NestedEnumgenderFilter | undefined;
}
