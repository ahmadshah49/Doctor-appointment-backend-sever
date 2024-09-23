import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentWhereInput } from "../inputs/AppointmentWhereInput";
import { EnumgenderNullableFilter } from "../inputs/EnumgenderNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  User?: UserNullableRelationFilter | undefined;
}
