import * as TypeGraphQL from "type-graphql";

export enum AppointmentStatus {
  UPCOMING = "UPCOMING",
  IN_PROGRESS = "IN_PROGRESS",
  MISSED = "MISSED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}
TypeGraphQL.registerEnumType(AppointmentStatus, {
  name: "AppointmentStatus",
  description: undefined,
});
