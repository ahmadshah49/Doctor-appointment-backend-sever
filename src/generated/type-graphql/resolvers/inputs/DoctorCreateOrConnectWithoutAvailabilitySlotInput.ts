import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateWithoutAvailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutAvailabilitySlotInput", {})
export class DoctorCreateOrConnectWithoutAvailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutAvailabilitySlotInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutAvailabilitySlotInput;
}
