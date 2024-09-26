import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotUpdateWithoutDoctorInput } from "../inputs/UnavailabilitySlotUpdateWithoutDoctorInput";
import { UnavailabilitySlotWhereUniqueInput } from "../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput", {})
export class UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: UnavailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: UnavailabilitySlotUpdateWithoutDoctorInput;
}
