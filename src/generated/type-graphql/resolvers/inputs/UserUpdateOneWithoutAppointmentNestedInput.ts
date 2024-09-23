import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAppointmentInput } from "../inputs/UserCreateOrConnectWithoutAppointmentInput";
import { UserCreateWithoutAppointmentInput } from "../inputs/UserCreateWithoutAppointmentInput";
import { UserUpdateToOneWithWhereWithoutAppointmentInput } from "../inputs/UserUpdateToOneWithWhereWithoutAppointmentInput";
import { UserUpsertWithoutAppointmentInput } from "../inputs/UserUpsertWithoutAppointmentInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutAppointmentNestedInput", {})
export class UserUpdateOneWithoutAppointmentNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAppointmentInput, {
    nullable: true
  })
  create?: UserCreateWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAppointmentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAppointmentInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAppointmentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutAppointmentInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutAppointmentInput | undefined;
}
