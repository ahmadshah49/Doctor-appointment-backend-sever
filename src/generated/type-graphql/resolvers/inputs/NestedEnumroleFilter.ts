import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("NestedEnumroleFilter", {})
export class NestedEnumroleFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumroleFilter, {
    nullable: true
  })
  not?: NestedEnumroleFilter | undefined;
}
