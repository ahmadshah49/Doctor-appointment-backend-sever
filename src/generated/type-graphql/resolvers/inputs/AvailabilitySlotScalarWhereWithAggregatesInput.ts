import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AvailabilitySlotScalarWhereWithAggregatesInput", {})
export class AvailabilitySlotScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AvailabilitySlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AvailabilitySlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AvailabilitySlotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  day?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  endTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isBooked?: BoolWithAggregatesFilter | undefined;
}
