import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentListRelationFilter } from "../inputs/AppointmentListRelationFilter";
import { AvailabilitySlotListRelationFilter } from "../inputs/AvailabilitySlotListRelationFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { EnumgenderFilter } from "../inputs/EnumgenderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PatientListRelationFilter } from "../inputs/PatientListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UnavailabilitySlotListRelationFilter } from "../inputs/UnavailabilitySlotListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("DoctorWhereInput", {})
export class DoctorWhereInput {
  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  AND?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  OR?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorWhereInput], {
    nullable: true
  })
  NOT?: DoctorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profilePhoto?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  availability?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAvailable?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFilter, {
    nullable: true
  })
  gender?: EnumgenderFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PatientListRelationFilter, {
    nullable: true
  })
  patients?: PatientListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppointmentListRelationFilter, {
    nullable: true
  })
  appointments?: AppointmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotListRelationFilter, {
    nullable: true
  })
  AvailabilitySlot?: AvailabilitySlotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotListRelationFilter, {
    nullable: true
  })
  UnavailabilitySlot?: UnavailabilitySlotListRelationFilter | undefined;
}
