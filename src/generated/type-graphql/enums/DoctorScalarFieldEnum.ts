import * as TypeGraphQL from "type-graphql";

export enum DoctorScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  profilePhoto = "profilePhoto",
  address = "address",
  availability = "availability",
  email = "email",
  isAvailable = "isAvailable",
  gender = "gender"
}
TypeGraphQL.registerEnumType(DoctorScalarFieldEnum, {
  name: "DoctorScalarFieldEnum",
  description: undefined,
});
