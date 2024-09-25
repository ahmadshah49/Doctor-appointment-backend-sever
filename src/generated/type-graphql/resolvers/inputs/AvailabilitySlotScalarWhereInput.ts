import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AvailabilitySlotScalarWhereInput", {})
export class AvailabilitySlotScalarWhereInput {
  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereInput], {
    nullable: true
  })
  AND?: AvailabilitySlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereInput], {
    nullable: true
  })
  OR?: AvailabilitySlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarWhereInput], {
    nullable: true
  })
  NOT?: AvailabilitySlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
}
