import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotOrderByWithAggregationInput } from "../../../inputs/AvailabilitySlotOrderByWithAggregationInput";
import { AvailabilitySlotScalarWhereWithAggregatesInput } from "../../../inputs/AvailabilitySlotScalarWhereWithAggregatesInput";
import { AvailabilitySlotWhereInput } from "../../../inputs/AvailabilitySlotWhereInput";
import { AvailabilitySlotScalarFieldEnum } from "../../../../enums/AvailabilitySlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  where?: AvailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AvailabilitySlotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "startTime" | "endTime" | "isBooked" | "doctorId">;

  @TypeGraphQL.Field(_type => AvailabilitySlotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AvailabilitySlotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
