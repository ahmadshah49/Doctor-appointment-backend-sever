import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutUserInput } from "../inputs/PatientUpdateWithoutUserInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutUserInput", {})
export class PatientUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutUserInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutUserInput;
}
