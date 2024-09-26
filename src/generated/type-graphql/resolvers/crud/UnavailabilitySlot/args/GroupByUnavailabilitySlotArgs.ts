import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotOrderByWithAggregationInput } from "../../../inputs/UnavailabilitySlotOrderByWithAggregationInput";
import { UnavailabilitySlotScalarWhereWithAggregatesInput } from "../../../inputs/UnavailabilitySlotScalarWhereWithAggregatesInput";
import { UnavailabilitySlotWhereInput } from "../../../inputs/UnavailabilitySlotWhereInput";
import { UnavailabilitySlotScalarFieldEnum } from "../../../../enums/UnavailabilitySlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  where?: UnavailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UnavailabilitySlotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "doctorId" | "day" | "startTime" | "endTime" | "startDate" | "endDate" | "reason" | "isAvailable">;

  @TypeGraphQL.Field(_type => UnavailabilitySlotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UnavailabilitySlotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
