import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDoctorInput } from "../inputs/UserCreateOrConnectWithoutDoctorInput";
import { UserCreateWithoutDoctorInput } from "../inputs/UserCreateWithoutDoctorInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutDoctorInput", {})
export class UserCreateNestedOneWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDoctorInput, {
    nullable: true
  })
  create?: UserCreateWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDoctorInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
