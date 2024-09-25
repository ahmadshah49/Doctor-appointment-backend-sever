import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateWithoutAvailabilitySlotInput } from "../inputs/DoctorUpdateWithoutAvailabilitySlotInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput", {})
export class DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutAvailabilitySlotInput, {
    nullable: false
  })
  data!: DoctorUpdateWithoutAvailabilitySlotInput;
}
