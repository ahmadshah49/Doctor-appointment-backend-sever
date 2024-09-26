import * as TypeGraphQL from "type-graphql";

export enum UnavailabilitySlotScalarFieldEnum {
  id = "id",
  doctorId = "doctorId",
  day = "day",
  startTime = "startTime",
  endTime = "endTime",
  startDate = "startDate",
  endDate = "endDate",
  reason = "reason",
  isAvailable = "isAvailable"
}
TypeGraphQL.registerEnumType(UnavailabilitySlotScalarFieldEnum, {
  name: "UnavailabilitySlotScalarFieldEnum",
  description: undefined,
});
