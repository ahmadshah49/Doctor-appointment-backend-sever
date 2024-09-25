import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotUpdateWithoutDoctorInput } from "../inputs/AvailabilitySlotUpdateWithoutDoctorInput";
import { AvailabilitySlotWhereUniqueInput } from "../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput", {})
export class AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: AvailabilitySlotUpdateWithoutDoctorInput;
}
