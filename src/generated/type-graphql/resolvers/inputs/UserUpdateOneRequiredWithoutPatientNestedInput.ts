import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPatientInput } from "../inputs/UserCreateOrConnectWithoutPatientInput";
import { UserCreateWithoutPatientInput } from "../inputs/UserCreateWithoutPatientInput";
import { UserUpdateToOneWithWhereWithoutPatientInput } from "../inputs/UserUpdateToOneWithWhereWithoutPatientInput";
import { UserUpsertWithoutPatientInput } from "../inputs/UserUpsertWithoutPatientInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPatientNestedInput", {})
export class UserUpdateOneRequiredWithoutPatientNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPatientInput, {
    nullable: true
  })
  create?: UserCreateWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPatientInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPatientInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPatientInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPatientInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPatientInput | undefined;
}
