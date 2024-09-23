import * as TypeGraphQL from "type-graphql";

export enum gender {
  MAlE = "MAlE",
  FEMALE = "FEMALE"
}
TypeGraphQL.registerEnumType(gender, {
  name: "gender",
  description: undefined,
});
