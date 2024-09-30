import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DoctorRelationFilter } from "../inputs/DoctorRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UnavailabilitySlotWhereInput } from "../inputs/UnavailabilitySlotWhereInput";

@TypeGraphQL.InputType("UnavailabilitySlotWhereUniqueInput", {})
export class UnavailabilitySlotWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId?: number | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereInput], {
    nullable: true
  })
  AND?: UnavailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereInput], {
    nullable: true
  })
  OR?: UnavailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotWhereInput], {
    nullable: true
  })
  NOT?: UnavailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  startDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  endDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reason?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isAvailable?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorRelationFilter, {
    nullable: true
  })
  doctor?: DoctorRelationFilter | undefined;
}
