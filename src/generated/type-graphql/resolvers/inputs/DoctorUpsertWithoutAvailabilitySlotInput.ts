import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateWithoutAvailabilitySlotInput";
import { DoctorUpdateWithoutAvailabilitySlotInput } from "../inputs/DoctorUpdateWithoutAvailabilitySlotInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutAvailabilitySlotInput", {})
export class DoctorUpsertWithoutAvailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutAvailabilitySlotInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutAvailabilitySlotInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutAvailabilitySlotInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutAvailabilitySlotInput;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;
}
