import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPatientInput } from "../inputs/UserCreateOrConnectWithoutPatientInput";
import { UserCreateWithoutPatientInput } from "../inputs/UserCreateWithoutPatientInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPatientInput", {})
export class UserCreateNestedOneWithoutPatientInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPatientInput, {
    nullable: true
  })
  create?: UserCreateWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPatientInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
