import * as TypeGraphQL from "type-graphql";

export enum AvailabilitySlotScalarFieldEnum {
  id = "id",
  doctorId = "doctorId",
  day = "day",
  startTime = "startTime",
  endTime = "endTime",
  isBooked = "isBooked"
}
TypeGraphQL.registerEnumType(AvailabilitySlotScalarFieldEnum, {
  name: "AvailabilitySlotScalarFieldEnum",
  description: undefined,
});
