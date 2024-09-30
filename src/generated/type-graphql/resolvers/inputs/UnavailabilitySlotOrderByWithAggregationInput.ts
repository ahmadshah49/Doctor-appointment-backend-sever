import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UnavailabilitySlotAvgOrderByAggregateInput } from "../inputs/UnavailabilitySlotAvgOrderByAggregateInput";
import { UnavailabilitySlotCountOrderByAggregateInput } from "../inputs/UnavailabilitySlotCountOrderByAggregateInput";
import { UnavailabilitySlotMaxOrderByAggregateInput } from "../inputs/UnavailabilitySlotMaxOrderByAggregateInput";
import { UnavailabilitySlotMinOrderByAggregateInput } from "../inputs/UnavailabilitySlotMinOrderByAggregateInput";
import { UnavailabilitySlotSumOrderByAggregateInput } from "../inputs/UnavailabilitySlotSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UnavailabilitySlotOrderByWithAggregationInput", {})
export class UnavailabilitySlotOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  startDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  endDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reason?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  isAvailable?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UnavailabilitySlotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UnavailabilitySlotAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UnavailabilitySlotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UnavailabilitySlotMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UnavailabilitySlotSumOrderByAggregateInput | undefined;
}
