import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutDoctorInput } from "../inputs/UserUpdateWithoutDoctorInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutDoctorInput", {})
export class UserUpdateToOneWithWhereWithoutDoctorInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDoctorInput, {
    nullable: false
  })
  data!: UserUpdateWithoutDoctorInput;
}
