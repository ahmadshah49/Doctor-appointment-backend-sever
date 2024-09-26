import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateWithoutUnavailabilitySlotInput";
import { DoctorUpdateWithoutUnavailabilitySlotInput } from "../inputs/DoctorUpdateWithoutUnavailabilitySlotInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpsertWithoutUnavailabilitySlotInput", {})
export class DoctorUpsertWithoutUnavailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorUpdateWithoutUnavailabilitySlotInput, {
    nullable: false
  })
  update!: DoctorUpdateWithoutUnavailabilitySlotInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutUnavailabilitySlotInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutUnavailabilitySlotInput;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;
}
