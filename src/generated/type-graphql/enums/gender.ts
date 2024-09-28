import * as TypeGraphQL from "type-graphql";

export enum gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHERS = "OTHERS"
}
TypeGraphQL.registerEnumType(gender, {
  name: "gender",
  description: undefined,
});
