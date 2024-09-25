import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateWithoutDoctorInput";
import { AvailabilitySlotUpdateWithoutDoctorInput } from "../inputs/AvailabilitySlotUpdateWithoutDoctorInput";
import { AvailabilitySlotWhereUniqueInput } from "../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput", {})
export class AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateWithoutDoctorInput, {
    nullable: false
  })
  update!: AvailabilitySlotUpdateWithoutDoctorInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: AvailabilitySlotCreateWithoutDoctorInput;
}
