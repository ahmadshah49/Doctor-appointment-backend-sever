import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDoctorInput } from "../inputs/UserCreateOrConnectWithoutDoctorInput";
import { UserCreateWithoutDoctorInput } from "../inputs/UserCreateWithoutDoctorInput";
import { UserUpdateToOneWithWhereWithoutDoctorInput } from "../inputs/UserUpdateToOneWithWhereWithoutDoctorInput";
import { UserUpsertWithoutDoctorInput } from "../inputs/UserUpsertWithoutDoctorInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDoctorNestedInput", {})
export class UserUpdateOneRequiredWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDoctorInput, {
    nullable: true
  })
  create?: UserCreateWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDoctorInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDoctorInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutDoctorInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutDoctorInput | undefined;
}
