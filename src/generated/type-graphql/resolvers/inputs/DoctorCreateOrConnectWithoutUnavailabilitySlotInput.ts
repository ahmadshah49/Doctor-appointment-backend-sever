import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateWithoutUnavailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutUnavailabilitySlotInput", {})
export class DoctorCreateOrConnectWithoutUnavailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutUnavailabilitySlotInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutUnavailabilitySlotInput;
}
