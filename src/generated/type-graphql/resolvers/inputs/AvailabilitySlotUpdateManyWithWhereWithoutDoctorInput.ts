import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotScalarWhereInput } from "../inputs/AvailabilitySlotScalarWhereInput";
import { AvailabilitySlotUpdateManyMutationInput } from "../inputs/AvailabilitySlotUpdateManyMutationInput";

@TypeGraphQL.InputType("AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput", {})
export class AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput {
  @TypeGraphQL.Field(_type => AvailabilitySlotScalarWhereInput, {
    nullable: false
  })
  where!: AvailabilitySlotScalarWhereInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: AvailabilitySlotUpdateManyMutationInput;
}
