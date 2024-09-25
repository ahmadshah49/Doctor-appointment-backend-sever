import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAppointmentStatusNullableFilter } from "../inputs/NestedEnumAppointmentStatusNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { AppointmentStatus } from "../../enums/AppointmentStatus";

@TypeGraphQL.InputType("NestedEnumAppointmentStatusNullableWithAggregatesFilter", {})
export class NestedEnumAppointmentStatusNullableWithAggregatesFilter {
  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  equals?: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => [AppointmentStatus], {
    nullable: true
  })
  in?: Array<"UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => [AppointmentStatus], {
    nullable: true
  })
  notIn?: Array<"UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAppointmentStatusNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableFilter, {
    nullable: true
  })
  _min?: NestedEnumAppointmentStatusNullableFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableFilter, {
    nullable: true
  })
  _max?: NestedEnumAppointmentStatusNullableFilter | undefined;
}
