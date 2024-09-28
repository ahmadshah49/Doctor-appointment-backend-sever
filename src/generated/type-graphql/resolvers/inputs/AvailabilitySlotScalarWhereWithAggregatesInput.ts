import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  endTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  isBooked?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntWithAggregatesFilter | undefined;
}
