import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnAppointmentDoctorArgs } from "./args/CreateManyAndReturnAppointmentDoctorArgs";
import { CreateManyAndReturnAppointmentPatientArgs } from "./args/CreateManyAndReturnAppointmentPatientArgs";
import { Doctor } from "../../models/Doctor";
import { Patient } from "../../models/Patient";
import { AppointmentStatus } from "../../enums/AppointmentStatus";
import { gender } from "../../enums/gender";

@TypeGraphQL.ObjectType("CreateManyAndReturnAppointment", {})
export class CreateManyAndReturnAppointment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  presciptions!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  scheduledDate!: Date | null;

  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  status!: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  patientId!: number | null;

  Doctor!: Doctor | null;
  Patient!: Patient | null;

  @TypeGraphQL.Field(_type => Doctor, {
    name: "Doctor",
    nullable: true
  })
  getDoctor(@TypeGraphQL.Root() root: CreateManyAndReturnAppointment, @TypeGraphQL.Args() args: CreateManyAndReturnAppointmentDoctorArgs): Doctor | null {
    return root.Doctor;
  }

  @TypeGraphQL.Field(_type => Patient, {
    name: "Patient",
    nullable: true
  })
  getPatient(@TypeGraphQL.Root() root: CreateManyAndReturnAppointment, @TypeGraphQL.Args() args: CreateManyAndReturnAppointmentPatientArgs): Patient | null {
    return root.Patient;
  }
}
