import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { role } from "../../enums/role";

@TypeGraphQL.ObjectType("UserMinAggregate", {})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber!: string | null;

  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  role!: "DOCTOR" | "PATIENT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tokenExpire!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resetPasswordToken!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  resetPasswordTokenExpire!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  otpExpire!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proflePicture!: string | null;
}
