import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutUserInput } from "../inputs/PatientCreateWithoutUserInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateOrConnectWithoutUserInput", {})
export class PatientCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: false
  })
  where!: PatientWhereUniqueInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutUserInput, {
    nullable: false
  })
  create!: PatientCreateWithoutUserInput;
}
