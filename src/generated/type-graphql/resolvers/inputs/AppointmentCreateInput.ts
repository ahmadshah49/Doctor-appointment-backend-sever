import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreatepresciptionsInput } from "../inputs/AppointmentCreatepresciptionsInput";
import { DoctorCreateNestedOneWithoutAppointmentsInput } from "../inputs/DoctorCreateNestedOneWithoutAppointmentsInput";
import { PatientCreateNestedOneWithoutAppointmentsInput } from "../inputs/PatientCreateNestedOneWithoutAppointmentsInput";
import { AppointmentStatus } from "../../enums/AppointmentStatus";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("AppointmentCreateInput", {})
export class AppointmentCreateInput {
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
    nullable: true
  })
  scheduledDate?: Date | undefined;

  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  status?: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endTime!: Date;

  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutAppointmentsInput, {
    nullable: true
  })
  Doctor?: DoctorCreateNestedOneWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateNestedOneWithoutAppointmentsInput, {
    nullable: true
  })
  Patient?: PatientCreateNestedOneWithoutAppointmentsInput | undefined;
}
