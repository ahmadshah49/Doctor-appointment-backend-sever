import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UnavailabilitySlotMinAggregate", {})
export class UnavailabilitySlotMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAvailable!: boolean | null;
}
