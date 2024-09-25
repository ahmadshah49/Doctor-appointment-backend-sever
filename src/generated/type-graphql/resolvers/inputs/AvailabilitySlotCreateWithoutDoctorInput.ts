import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AvailabilitySlotCreateWithoutDoctorInput", {})
export class AvailabilitySlotCreateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  day!: string;

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
  isBooked?: boolean | undefined;
}
