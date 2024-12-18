import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Appointment } from "../models/Appointment";
import { AvailabilitySlot } from "../models/AvailabilitySlot";
import { Patient } from "../models/Patient";
import { UnavailabilitySlot } from "../models/UnavailabilitySlot";
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
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "OTHERS";

  patients?: Patient[];

  appointments?: Appointment[];

  AvailabilitySlot?: AvailabilitySlot[];

  UnavailabilitySlot?: UnavailabilitySlot[];

  @TypeGraphQL.Field(_type => DoctorCount, {
    nullable: true
  })
  _count?: DoctorCount | null;
}
