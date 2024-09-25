import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  password = "password",
  phoneNumber = "phoneNumber",
  role = "role",
  token = "token",
  tokenExpire = "tokenExpire",
  otp = "otp",
  resetPasswordToken = "resetPasswordToken",
  resetPasswordTokenExpire = "resetPasswordTokenExpire",
  otpExpire = "otpExpire",
  profilePicture = "profilePicture"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
