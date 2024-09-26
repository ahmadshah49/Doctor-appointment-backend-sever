import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateOrConnectWithoutUnavailabilitySlotInput";
import { DoctorCreateWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateWithoutUnavailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutUnavailabilitySlotInput", {})
export class DoctorCreateNestedOneWithoutUnavailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutUnavailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutUnavailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
