import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyDoctorInputEnvelope } from "../inputs/AppointmentCreateManyDoctorInputEnvelope";
import { AppointmentCreateOrConnectWithoutDoctorInput } from "../inputs/AppointmentCreateOrConnectWithoutDoctorInput";
import { AppointmentCreateWithoutDoctorInput } from "../inputs/AppointmentCreateWithoutDoctorInput";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyWithWhereWithoutDoctorInput } from "../inputs/AppointmentUpdateManyWithWhereWithoutDoctorInput";
import { AppointmentUpdateWithWhereUniqueWithoutDoctorInput } from "../inputs/AppointmentUpdateWithWhereUniqueWithoutDoctorInput";
import { AppointmentUpsertWithWhereUniqueWithoutDoctorInput } from "../inputs/AppointmentUpsertWithWhereUniqueWithoutDoctorInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithoutDoctorNestedInput", {})
export class AppointmentUpdateManyWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  set?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  delete?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutDoctorInput], {
    nullable: true
  })
  updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppointmentScalarWhereInput[] | undefined;
}
