import * as TypeGraphQL from "type-graphql";

export enum AvailabilitySlotScalarFieldEnum {
  id = "id",
  startDate = "startDate",
  endDate = "endDate",
  startTime = "startTime",
  endTime = "endTime",
  isBooked = "isBooked",
  doctorId = "doctorId"
}
TypeGraphQL.registerEnumType(AvailabilitySlotScalarFieldEnum, {
  name: "AvailabilitySlotScalarFieldEnum",
  description: undefined,
});
