import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateWithoutDoctorInput";
import { AvailabilitySlotWhereUniqueInput } from "../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("AvailabilitySlotCreateOrConnectWithoutDoctorInput", {})
export class AvailabilitySlotCreateOrConnectWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: AvailabilitySlotCreateWithoutDoctorInput;
}
