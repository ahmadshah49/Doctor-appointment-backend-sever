import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Patient } from "../models/Patient";
import { User } from "../models/User";
import { gender } from "../enums/gender";
import { DoctorCount } from "../resolvers/outputs/DoctorCount";

@TypeGraphQL.ObjectType("Doctor", {})
export class Doctor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePhoto?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  availability?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAvailable?: boolean | null;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS";

  patients?: Patient[];

  appointments?: Appointment[];

  @TypeGraphQL.Field(_type => DoctorCount, {
    nullable: true
  })
  _count?: DoctorCount | null;
}
