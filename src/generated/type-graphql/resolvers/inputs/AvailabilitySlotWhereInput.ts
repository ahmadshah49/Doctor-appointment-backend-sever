import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorRelationFilter } from "../inputs/DoctorRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AvailabilitySlotWhereInput", {})
export class AvailabilitySlotWhereInput {
  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput], {
    nullable: true
  })
  AND?: AvailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput], {
    nullable: true
  })
  OR?: AvailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotWhereInput], {
    nullable: true
  })
  NOT?: AvailabilitySlotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isBooked?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  doctorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorRelationFilter, {
    nullable: true
  })
  doctor?: DoctorRelationFilter | undefined;
}
