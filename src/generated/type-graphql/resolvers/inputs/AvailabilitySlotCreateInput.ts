import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateNestedOneWithoutAvailabilitySlotInput";

@TypeGraphQL.InputType("AvailabilitySlotCreateInput", {})
export class AvailabilitySlotCreateInput {
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

  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutAvailabilitySlotInput, {
    nullable: false
  })
  doctor!: DoctorCreateNestedOneWithoutAvailabilitySlotInput;
}
