import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
import { role } from "../../enums/role";

@TypeGraphQL.ObjectType("UserGroupBy", {})
export class UserGroupBy {
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
    nullable: false
  })
  role!: "DOCTOR" | "PATIENT";

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

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAvgAggregate, {
    nullable: true
  })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserSumAggregate, {
    nullable: true
  })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
