import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotWhereInput } from "../inputs/AvailabilitySlotWhereInput";

@TypeGraphQL.InputType("AvailabilitySlotListRelationFilter", {})
export class AvailabilitySlotListRelationFilter {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  every?: AvailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  some?: AvailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  none?: AvailabilitySlotWhereInput | undefined;
}
