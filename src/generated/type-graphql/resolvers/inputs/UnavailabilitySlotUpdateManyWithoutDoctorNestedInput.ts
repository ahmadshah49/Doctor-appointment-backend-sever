import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnavailabilitySlotCreateManyDoctorInputEnvelope } from "../inputs/UnavailabilitySlotCreateManyDoctorInputEnvelope";
import { UnavailabilitySlotCreateOrConnectWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateOrConnectWithoutDoctorInput";
import { UnavailabilitySlotCreateWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateWithoutDoctorInput";
import { UnavailabilitySlotScalarWhereInput } from "../inputs/UnavailabilitySlotScalarWhereInput";
import { UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput } from "../inputs/UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput";
import { UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput } from "../inputs/UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput";
import { UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput } from "../inputs/UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput";
import { UnavailabilitySlotWhereUniqueInput } from "../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.InputType("UnavailabilitySlotUpdateManyWithoutDoctorNestedInput", {})
export class UnavailabilitySlotUpdateManyWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => [UnavailabilitySlotCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: UnavailabilitySlotCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: UnavailabilitySlotCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  upsert?: UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: UnavailabilitySlotCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  set?: UnavailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UnavailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  delete?: UnavailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereUniqueInput], {
    nullable: true
  })
  connect?: UnavailabilitySlotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  update?: UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput], {
    nullable: true
  })
  updateMany?: UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UnavailabilitySlotScalarWhereInput[] | undefined;
}
