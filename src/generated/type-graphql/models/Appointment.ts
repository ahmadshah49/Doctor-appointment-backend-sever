import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { gender } from "../enums/gender";

@TypeGraphQL.ObjectType("Appointment", {})
export class Appointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
  gender?: "MAlE" | "FEMALE" | "OTHERS" | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledDate!: Date;

  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  status?: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | null;

  Doctor?: Doctor | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId?: number | null;

  Patient?: Patient | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  patientId?: number | null;
}
