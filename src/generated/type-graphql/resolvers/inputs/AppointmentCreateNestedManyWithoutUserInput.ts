import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyUserInputEnvelope } from "../inputs/AppointmentCreateManyUserInputEnvelope";
import { AppointmentCreateOrConnectWithoutUserInput } from "../inputs/AppointmentCreateOrConnectWithoutUserInput";
import { AppointmentCreateWithoutUserInput } from "../inputs/AppointmentCreateWithoutUserInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedManyWithoutUserInput", {})
export class AppointmentCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutUserInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;
}
