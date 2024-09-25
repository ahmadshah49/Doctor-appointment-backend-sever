import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyPatientInputEnvelope } from "../inputs/AppointmentCreateManyPatientInputEnvelope";
import { AppointmentCreateOrConnectWithoutPatientInput } from "../inputs/AppointmentCreateOrConnectWithoutPatientInput";
import { AppointmentCreateWithoutPatientInput } from "../inputs/AppointmentCreateWithoutPatientInput";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyWithWhereWithoutPatientInput } from "../inputs/AppointmentUpdateManyWithWhereWithoutPatientInput";
import { AppointmentUpdateWithWhereUniqueWithoutPatientInput } from "../inputs/AppointmentUpdateWithWhereUniqueWithoutPatientInput";
import { AppointmentUpsertWithWhereUniqueWithoutPatientInput } from "../inputs/AppointmentUpsertWithWhereUniqueWithoutPatientInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithoutPatientNestedInput", {})
export class AppointmentUpdateManyWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutPatientInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyPatientInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutPatientInput], {
    nullable: true
  })
  update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutPatientInput], {
    nullable: true
  })
  updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppointmentScalarWhereInput[] | undefined;
}
