import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAppointmentStatusNullableFilter } from "../inputs/NestedEnumAppointmentStatusNullableFilter";
import { AppointmentStatus } from "../../enums/AppointmentStatus";

@TypeGraphQL.InputType("EnumAppointmentStatusNullableFilter", {})
export class EnumAppointmentStatusNullableFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAppointmentStatusNullableFilter, {
    nullable: true
  })
  not?: NestedEnumAppointmentStatusNullableFilter | undefined;
}
