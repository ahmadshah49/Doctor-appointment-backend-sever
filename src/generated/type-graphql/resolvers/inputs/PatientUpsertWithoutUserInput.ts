import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateWithoutUserInput } from "../inputs/PatientCreateWithoutUserInput";
import { PatientUpdateWithoutUserInput } from "../inputs/PatientUpdateWithoutUserInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpsertWithoutUserInput", {})
export class PatientUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => PatientUpdateWithoutUserInput, {
    nullable: false
  })
  update!: PatientUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => PatientCreateWithoutUserInput, {
    nullable: false
  })
  create!: PatientCreateWithoutUserInput;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;
}
