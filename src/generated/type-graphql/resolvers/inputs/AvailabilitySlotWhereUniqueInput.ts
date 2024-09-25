import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotWhereInput } from "../inputs/AvailabilitySlotWhereInput";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DoctorRelationFilter } from "../inputs/DoctorRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AvailabilitySlotWhereUniqueInput", {})
export class AvailabilitySlotWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
  doctorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  day?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isBooked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DoctorRelationFilter, {
    nullable: true
  })
  doctor?: DoctorRelationFilter | undefined;
}
