import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreatepresciptionsInput } from "../inputs/AppointmentCreatepresciptionsInput";
import { PatientCreateNestedOneWithoutAppointmentsInput } from "../inputs/PatientCreateNestedOneWithoutAppointmentsInput";
import { AppointmentStatus } from "../../enums/AppointmentStatus";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("AppointmentCreateWithoutDoctorInput", {})
export class AppointmentCreateWithoutDoctorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  age?: string | undefined;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender?: "MAlE" | "FEMALE" | "OTHERS" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory?: string | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreatepresciptionsInput, {
    nullable: true
  })
  presciptions?: AppointmentCreatepresciptionsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledDate!: Date;

  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  status?: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutAppointmentsInput, {
    nullable: true
  })
  Patient?: PatientCreateNestedOneWithoutAppointmentsInput | undefined;
}
