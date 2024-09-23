import * as TypeGraphQL from "type-graphql";

export enum role {
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT"
}
TypeGraphQL.registerEnumType(role, {
  name: "role",
  description: undefined,
});
