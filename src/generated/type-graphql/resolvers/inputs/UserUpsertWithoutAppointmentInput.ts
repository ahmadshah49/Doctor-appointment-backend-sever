import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAppointmentInput } from "../inputs/UserCreateWithoutAppointmentInput";
import { UserUpdateWithoutAppointmentInput } from "../inputs/UserUpdateWithoutAppointmentInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutAppointmentInput", {})
export class UserUpsertWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAppointmentInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAppointmentInput, {
    nullable: false
  })
  create!: UserCreateWithoutAppointmentInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
