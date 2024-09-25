import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateManyDoctorInputEnvelope } from "../inputs/AvailabilitySlotCreateManyDoctorInputEnvelope";
import { AvailabilitySlotCreateOrConnectWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateOrConnectWithoutDoctorInput";
import { AvailabilitySlotCreateWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateWithoutDoctorInput";
import { AvailabilitySlotWhereUniqueInput } from "../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("AvailabilitySlotCreateNestedManyWithoutDoctorInput", {})
export class AvailabilitySlotCreateNestedManyWithoutDoctorInput {
  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: AvailabilitySlotCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  connect?: AvailabilitySlotWhereUniqueInput[] | undefined;
}
