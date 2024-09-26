import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotScalarWhereInput } from "../inputs/UnavailabilitySlotScalarWhereInput";
import { UnavailabilitySlotUpdateManyMutationInput } from "../inputs/UnavailabilitySlotUpdateManyMutationInput";

@TypeGraphQL.InputType("UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput", {})
export class UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UnavailabilitySlotScalarWhereInput, {
    nullable: false
  })
  where!: UnavailabilitySlotScalarWhereInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: UnavailabilitySlotUpdateManyMutationInput;
}
