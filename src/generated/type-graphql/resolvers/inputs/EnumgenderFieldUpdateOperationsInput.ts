import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("EnumgenderFieldUpdateOperationsInput", {})
export class EnumgenderFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  set?: "MAlE" | "FEMALE" | "OTHERS" | undefined;
}
