import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentListRelationFilter } from "../inputs/AppointmentListRelationFilter";
import { DoctorNullableRelationFilter } from "../inputs/DoctorNullableRelationFilter";
import { EnumgenderFilter } from "../inputs/EnumgenderFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PatientWhereInput", {})
export class PatientWhereInput {
  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  AND?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  OR?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true
  })
  NOT?: PatientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  age?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  fullName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFilter, {
    nullable: true
  })
  gender?: EnumgenderFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profilePicture?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phoneNo?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  doctorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorNullableRelationFilter, {
    nullable: true
  })
  Doctor?: DoctorNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppointmentListRelationFilter, {
    nullable: true
  })
  appointments?: AppointmentListRelationFilter | undefined;
}
