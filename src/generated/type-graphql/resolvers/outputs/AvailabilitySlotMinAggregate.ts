import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AvailabilitySlotMinAggregate", {})
export class AvailabilitySlotMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  day!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endTime!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isBooked!: boolean | null;
}
