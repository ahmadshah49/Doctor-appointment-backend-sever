import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotAvgAggregate } from "../outputs/UnavailabilitySlotAvgAggregate";
import { UnavailabilitySlotCountAggregate } from "../outputs/UnavailabilitySlotCountAggregate";
import { UnavailabilitySlotMaxAggregate } from "../outputs/UnavailabilitySlotMaxAggregate";
import { UnavailabilitySlotMinAggregate } from "../outputs/UnavailabilitySlotMinAggregate";
import { UnavailabilitySlotSumAggregate } from "../outputs/UnavailabilitySlotSumAggregate";

@TypeGraphQL.ObjectType("AggregateUnavailabilitySlot", {})
export class AggregateUnavailabilitySlot {
  @TypeGraphQL.Field(_type => UnavailabilitySlotCountAggregate, {
    nullable: true
  })
  _count!: UnavailabilitySlotCountAggregate | null;

  @TypeGraphQL.Field(_type => UnavailabilitySlotAvgAggregate, {
    nullable: true
  })
  _avg!: UnavailabilitySlotAvgAggregate | null;

  @TypeGraphQL.Field(_type => UnavailabilitySlotSumAggregate, {
    nullable: true
  })
  _sum!: UnavailabilitySlotSumAggregate | null;

  @TypeGraphQL.Field(_type => UnavailabilitySlotMinAggregate, {
    nullable: true
  })
  _min!: UnavailabilitySlotMinAggregate | null;

  @TypeGraphQL.Field(_type => UnavailabilitySlotMaxAggregate, {
    nullable: true
  })
  _max!: UnavailabilitySlotMaxAggregate | null;
}
