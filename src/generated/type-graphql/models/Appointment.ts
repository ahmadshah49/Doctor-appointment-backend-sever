import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { gender } from "../enums/gender";

@TypeGraphQL.ObjectType("Appointment", {})
export class Appointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  age?: string | null;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender?: "MAlE" | "FEMALE" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNo?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  presciptions!: string[];
}
