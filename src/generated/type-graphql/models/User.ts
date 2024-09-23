import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { role } from "../enums/role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | null;

  @TypeGraphQL.Field(_type => role, {
    nullable: false
  })
  role!: "DOCTOR" | "PATIENT";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  tokenExpire?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  otp?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resetPasswordToken?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  resetPasswordTokenExpire?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  otpExpire?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proflePicture?: string | null;

  appointment?: Appointment[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
