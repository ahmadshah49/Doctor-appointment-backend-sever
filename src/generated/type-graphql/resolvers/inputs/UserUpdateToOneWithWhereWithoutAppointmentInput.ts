import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutAppointmentInput } from "../inputs/UserUpdateWithoutAppointmentInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAppointmentInput", {})
export class UserUpdateToOneWithWhereWithoutAppointmentInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAppointmentInput, {
    nullable: false
  })
  data!: UserUpdateWithoutAppointmentInput;
}
