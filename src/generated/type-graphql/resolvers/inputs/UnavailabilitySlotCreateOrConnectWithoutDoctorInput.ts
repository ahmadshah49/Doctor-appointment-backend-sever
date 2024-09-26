import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotCreateWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateWithoutDoctorInput";
import { UnavailabilitySlotWhereUniqueInput } from "../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("UnavailabilitySlotCreateOrConnectWithoutDoctorInput", {})
export class UnavailabilitySlotCreateOrConnectWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: UnavailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateWithoutDoctorInput, {
    nullable: false
  })
  create!: UnavailabilitySlotCreateWithoutDoctorInput;
}
