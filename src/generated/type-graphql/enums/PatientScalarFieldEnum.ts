import * as TypeGraphQL from "type-graphql";

export enum PatientScalarFieldEnum {
  id = "id",
  age = "age",
  fullName = "fullName",
  gender = "gender",
  address = "address",
  profilePicture = "profilePicture",
  phoneNo = "phoneNo",
  doctorId = "doctorId",
  userId = "userId"
}
TypeGraphQL.registerEnumType(PatientScalarFieldEnum, {
  name: "PatientScalarFieldEnum",
  description: undefined,
});
