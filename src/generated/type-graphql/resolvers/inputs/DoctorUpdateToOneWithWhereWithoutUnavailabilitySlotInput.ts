import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateWithoutUnavailabilitySlotInput } from "../inputs/DoctorUpdateWithoutUnavailabilitySlotInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput", {})
export class DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutUnavailabilitySlotInput, {
    nullable: false
  })
  data!: DoctorUpdateWithoutUnavailabilitySlotInput;
}
