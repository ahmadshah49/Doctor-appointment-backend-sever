import * as TypeGraphQL from "type-graphql";

export enum AppointmentScalarFieldEnum {
  id = "id",
  userId = "userId",
  fullName = "fullName",
  age = "age",
  gender = "gender",
  phoneNo = "phoneNo",
  address = "address",
  medicalHistory = "medicalHistory",
  presciptions = "presciptions"
}
TypeGraphQL.registerEnumType(AppointmentScalarFieldEnum, {
  name: "AppointmentScalarFieldEnum",
  description: undefined,
});
