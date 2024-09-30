import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateNestedOneWithoutUnavailabilitySlotInput";

@TypeGraphQL.InputType("UnavailabilitySlotCreateInput", {})
export class UnavailabilitySlotCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAvailable?: boolean | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutUnavailabilitySlotInput, {
    nullable: false
  })
  doctor!: DoctorCreateNestedOneWithoutUnavailabilitySlotInput;
}
