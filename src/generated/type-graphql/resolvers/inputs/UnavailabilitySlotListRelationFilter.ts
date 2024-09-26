import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotWhereInput } from "../inputs/UnavailabilitySlotWhereInput";

@TypeGraphQL.InputType("UnavailabilitySlotListRelationFilter", {})
export class UnavailabilitySlotListRelationFilter {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  every?: UnavailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  some?: UnavailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  none?: UnavailabilitySlotWhereInput | undefined;
}
