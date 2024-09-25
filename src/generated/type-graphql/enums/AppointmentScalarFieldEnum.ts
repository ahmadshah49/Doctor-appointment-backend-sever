import * as TypeGraphQL from "type-graphql";

export enum AppointmentScalarFieldEnum {
  id = "id",
  fullName = "fullName",
  age = "age",
  gender = "gender",
  phoneNo = "phoneNo",
  address = "address",
  medicalHistory = "medicalHistory",
  presciptions = "presciptions",
  details = "details",
  scheduledDate = "scheduledDate",
  status = "status",
  doctorId = "doctorId",
  patientId = "patientId"
}
TypeGraphQL.registerEnumType(AppointmentScalarFieldEnum, {
  name: "AppointmentScalarFieldEnum",
  description: undefined,
});
