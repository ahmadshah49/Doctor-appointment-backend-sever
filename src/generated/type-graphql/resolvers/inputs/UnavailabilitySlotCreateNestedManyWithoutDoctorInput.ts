import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotCreateManyDoctorInputEnvelope } from "../inputs/UnavailabilitySlotCreateManyDoctorInputEnvelope";
import { UnavailabilitySlotCreateOrConnectWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateOrConnectWithoutDoctorInput";
import { UnavailabilitySlotCreateWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateWithoutDoctorInput";
import { UnavailabilitySlotWhereUniqueInput } from "../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("UnavailabilitySlotCreateNestedManyWithoutDoctorInput", {})
export class UnavailabilitySlotCreateNestedManyWithoutDoctorInput {
  @TypeGraphQL.Field(_type => [UnavailabilitySlotCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: UnavailabilitySlotCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: UnavailabilitySlotCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: UnavailabilitySlotCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  connect?: UnavailabilitySlotWhereUniqueInput[] | undefined;
}
