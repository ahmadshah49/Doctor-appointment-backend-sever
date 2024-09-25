import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateOrConnectWithoutAvailabilitySlotInput";
import { DoctorCreateWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateWithoutAvailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutAvailabilitySlotInput", {})
export class DoctorCreateNestedOneWithoutAvailabilitySlotInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutAvailabilitySlotInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutAvailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutAvailabilitySlotInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
