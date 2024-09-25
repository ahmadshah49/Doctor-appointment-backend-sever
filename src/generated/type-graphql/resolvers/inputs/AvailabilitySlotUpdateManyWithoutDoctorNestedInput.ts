import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateManyDoctorInputEnvelope } from "../inputs/AvailabilitySlotCreateManyDoctorInputEnvelope";
import { AvailabilitySlotCreateOrConnectWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateOrConnectWithoutDoctorInput";
import { AvailabilitySlotCreateWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateWithoutDoctorInput";
import { AvailabilitySlotScalarWhereInput } from "../inputs/AvailabilitySlotScalarWhereInput";
import { AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput } from "../inputs/AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput";
import { AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput } from "../inputs/AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput";
import { AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput } from "../inputs/AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput";
import { AvailabilitySlotWhereUniqueInput } from "../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("AvailabilitySlotUpdateManyWithoutDoctorNestedInput", {})
export class AvailabilitySlotUpdateManyWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: AvailabilitySlotCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: AvailabilitySlotCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  set?: AvailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AvailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  delete?: AvailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  connect?: AvailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  update?: AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput], {
    nullable: true
  })
  updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AvailabilitySlotScalarWhereInput[] | undefined;
}
