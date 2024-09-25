import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPatientInput } from "../inputs/UserCreateWithoutPatientInput";
import { UserUpdateWithoutPatientInput } from "../inputs/UserUpdateWithoutPatientInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutPatientInput", {})
export class UserUpsertWithoutPatientInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPatientInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPatientInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPatientInput, {
    nullable: false
  })
  create!: UserCreateWithoutPatientInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
