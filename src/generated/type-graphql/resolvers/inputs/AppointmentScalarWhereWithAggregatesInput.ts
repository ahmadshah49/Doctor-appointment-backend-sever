import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAppointmentStatusNullableWithAggregatesFilter } from "../inputs/EnumAppointmentStatusNullableWithAggregatesFilter";
import { EnumgenderNullableWithAggregatesFilter } from "../inputs/EnumgenderNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("AppointmentScalarWhereWithAggregatesInput", {})
export class AppointmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AppointmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  fullName?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  age?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderNullableWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumgenderNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  phoneNo?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  medicalHistory?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  presciptions?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  details?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  scheduledDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAppointmentStatusNullableWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumAppointmentStatusNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  patientId?: IntNullableWithAggregatesFilter | undefined;
}
