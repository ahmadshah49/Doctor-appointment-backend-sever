import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentStatus } from "../../enums/AppointmentStatus";

@TypeGraphQL.InputType("NullableEnumAppointmentStatusFieldUpdateOperationsInput", {})
export class NullableEnumAppointmentStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  set?: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | undefined;
}
