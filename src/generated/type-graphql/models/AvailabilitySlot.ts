import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctor } from "../models/Doctor";

@TypeGraphQL.ObjectType("AvailabilitySlot", {})
export class AvailabilitySlot {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endTime!: Date;

  doctor?: Doctor;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  doctorId!: number;
}
