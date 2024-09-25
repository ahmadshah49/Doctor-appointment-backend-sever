import * as TypeGraphQL from "type-graphql";

export enum gender {
  MAlE = "MAlE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS"
}
TypeGraphQL.registerEnumType(gender, {
  name: "gender",
  description: undefined,
});
