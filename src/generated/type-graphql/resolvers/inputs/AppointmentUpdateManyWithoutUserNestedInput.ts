import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyUserInputEnvelope } from "../inputs/AppointmentCreateManyUserInputEnvelope";
import { AppointmentCreateOrConnectWithoutUserInput } from "../inputs/AppointmentCreateOrConnectWithoutUserInput";
import { AppointmentCreateWithoutUserInput } from "../inputs/AppointmentCreateWithoutUserInput";
import { AppointmentScalarWhereInput } from "../inputs/AppointmentScalarWhereInput";
import { AppointmentUpdateManyWithWhereWithoutUserInput } from "../inputs/AppointmentUpdateManyWithWhereWithoutUserInput";
import { AppointmentUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AppointmentUpdateWithWhereUniqueWithoutUserInput";
import { AppointmentUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AppointmentUpsertWithWhereUniqueWithoutUserInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateManyWithoutUserNestedInput", {})
export class AppointmentUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutUserInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AppointmentUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: AppointmentUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppointmentScalarWhereInput[] | undefined;
}
