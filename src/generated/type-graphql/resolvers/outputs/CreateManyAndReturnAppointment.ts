import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnAppointmentUserArgs } from "./args/CreateManyAndReturnAppointmentUserArgs";
import { User } from "../../models/User";
import { gender } from "../../enums/gender";

@TypeGraphQL.ObjectType("CreateManyAndReturnAppointment", {})
export class CreateManyAndReturnAppointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  age!: string | null;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender!: "MAlE" | "FEMALE" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  presciptions!: string[] | null;

  User!: User | null;

  @TypeGraphQL.Field(_type => User, {
    name: "User",
    nullable: true
  })
  getUser(@TypeGraphQL.Root() root: CreateManyAndReturnAppointment, @TypeGraphQL.Args() args: CreateManyAndReturnAppointmentUserArgs): User | null {
    return root.User;
  }
}
