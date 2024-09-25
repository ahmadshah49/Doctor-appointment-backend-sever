import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { EnumgenderWithAggregatesFilter } from "../inputs/EnumgenderWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DoctorScalarWhereWithAggregatesInput", {})
export class DoctorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DoctorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  profilePhoto?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  address?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  availability?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  isAvailable?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumgenderWithAggregatesFilter, {
    nullable: true
  })
  gender?: EnumgenderWithAggregatesFilter | undefined;
}
