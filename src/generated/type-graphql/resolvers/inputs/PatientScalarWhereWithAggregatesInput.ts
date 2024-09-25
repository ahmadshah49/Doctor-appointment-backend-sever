import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumgenderWithAggregatesFilter } from "../inputs/EnumgenderWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PatientScalarWhereWithAggregatesInput", {})
export class PatientScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PatientScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  age?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fullName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumgenderWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  profilePicture?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  phoneNo?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  doctorId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
