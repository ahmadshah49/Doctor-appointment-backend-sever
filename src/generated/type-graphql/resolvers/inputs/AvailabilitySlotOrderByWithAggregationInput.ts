import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotAvgOrderByAggregateInput } from "../inputs/AvailabilitySlotAvgOrderByAggregateInput";
import { AvailabilitySlotCountOrderByAggregateInput } from "../inputs/AvailabilitySlotCountOrderByAggregateInput";
import { AvailabilitySlotMaxOrderByAggregateInput } from "../inputs/AvailabilitySlotMaxOrderByAggregateInput";
import { AvailabilitySlotMinOrderByAggregateInput } from "../inputs/AvailabilitySlotMinOrderByAggregateInput";
import { AvailabilitySlotSumOrderByAggregateInput } from "../inputs/AvailabilitySlotSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AvailabilitySlotOrderByWithAggregationInput", {})
export class AvailabilitySlotOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AvailabilitySlotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AvailabilitySlotAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AvailabilitySlotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AvailabilitySlotMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AvailabilitySlotSumOrderByAggregateInput | undefined;
}
