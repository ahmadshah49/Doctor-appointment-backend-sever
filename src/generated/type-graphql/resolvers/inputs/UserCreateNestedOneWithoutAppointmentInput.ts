import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAppointmentInput } from "../inputs/UserCreateOrConnectWithoutAppointmentInput";
import { UserCreateWithoutAppointmentInput } from "../inputs/UserCreateWithoutAppointmentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAppointmentInput", {})
export class UserCreateNestedOneWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: UserCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
