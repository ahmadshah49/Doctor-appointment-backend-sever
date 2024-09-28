import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

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
}
