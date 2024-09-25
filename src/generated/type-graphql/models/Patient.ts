import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { User } from "../models/User";
import { gender } from "../enums/gender";
import { PatientCount } from "../resolvers/outputs/PatientCount";

@TypeGraphQL.ObjectType("Patient", {})
export class Patient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullName!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePicture?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNo!: string;

  Doctor?: Doctor | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId?: number | null;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  appointments?: Appointment[];

  @TypeGraphQL.Field(_type => PatientCount, {
    nullable: true
  })
  _count?: PatientCount | null;
}
