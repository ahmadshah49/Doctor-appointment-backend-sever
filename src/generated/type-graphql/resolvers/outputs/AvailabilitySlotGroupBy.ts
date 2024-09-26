import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotAvgAggregate } from "../outputs/AvailabilitySlotAvgAggregate";
import { AvailabilitySlotCountAggregate } from "../outputs/AvailabilitySlotCountAggregate";
import { AvailabilitySlotMaxAggregate } from "../outputs/AvailabilitySlotMaxAggregate";
import { AvailabilitySlotMinAggregate } from "../outputs/AvailabilitySlotMinAggregate";
import { AvailabilitySlotSumAggregate } from "../outputs/AvailabilitySlotSumAggregate";

@TypeGraphQL.ObjectType("AvailabilitySlotGroupBy", {})
export class AvailabilitySlotGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endTime!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isBooked!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  doctorId!: number;

  @TypeGraphQL.Field(_type => AvailabilitySlotCountAggregate, {
    nullable: true
  })
  _count!: AvailabilitySlotCountAggregate | null;

  @TypeGraphQL.Field(_type => AvailabilitySlotAvgAggregate, {
    nullable: true
  })
  _avg!: AvailabilitySlotAvgAggregate | null;

  @TypeGraphQL.Field(_type => AvailabilitySlotSumAggregate, {
    nullable: true
  })
  _sum!: AvailabilitySlotSumAggregate | null;

  @TypeGraphQL.Field(_type => AvailabilitySlotMinAggregate, {
    nullable: true
  })
  _min!: AvailabilitySlotMinAggregate | null;

  @TypeGraphQL.Field(_type => AvailabilitySlotMaxAggregate, {
    nullable: true
  })
  _max!: AvailabilitySlotMaxAggregate | null;
}
