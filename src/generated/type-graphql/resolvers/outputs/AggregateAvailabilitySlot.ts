import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotAvgAggregate } from "../outputs/AvailabilitySlotAvgAggregate";
import { AvailabilitySlotCountAggregate } from "../outputs/AvailabilitySlotCountAggregate";
import { AvailabilitySlotMaxAggregate } from "../outputs/AvailabilitySlotMaxAggregate";
import { AvailabilitySlotMinAggregate } from "../outputs/AvailabilitySlotMinAggregate";
import { AvailabilitySlotSumAggregate } from "../outputs/AvailabilitySlotSumAggregate";

@TypeGraphQL.ObjectType("AggregateAvailabilitySlot", {})
export class AggregateAvailabilitySlot {
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
