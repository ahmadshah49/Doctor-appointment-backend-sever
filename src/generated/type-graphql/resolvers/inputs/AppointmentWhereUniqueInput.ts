import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentWhereInput } from "../inputs/AppointmentWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorNullableRelationFilter } from "../inputs/DoctorNullableRelationFilter";
import { EnumAppointmentStatusNullableFilter } from "../inputs/EnumAppointmentStatusNullableFilter";
import { EnumgenderNullableFilter } from "../inputs/EnumgenderNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PatientNullableRelationFilter } from "../inputs/PatientNullableRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("AppointmentWhereUniqueInput", {})
export class AppointmentWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  AND?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  OR?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereInput], {
    nullable: true
  })
  NOT?: AppointmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  fullName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  age?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderNullableFilter, {
    nullable: true
  })
  gender?: EnumgenderNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phoneNo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  medicalHistory?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  presciptions?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  details?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  scheduledDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAppointmentStatusNullableFilter, {
    nullable: true
  })
  status?: EnumAppointmentStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  doctorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  patientId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorNullableRelationFilter, {
    nullable: true
  })
  Doctor?: DoctorNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientNullableRelationFilter, {
    nullable: true
  })
  Patient?: PatientNullableRelationFilter | undefined;
}
