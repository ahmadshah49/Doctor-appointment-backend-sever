import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutUserInput } from "../inputs/PatientCreateOrConnectWithoutUserInput";
import { PatientCreateWithoutUserInput } from "../inputs/PatientCreateWithoutUserInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedOneWithoutUserInput", {})
export class PatientCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutUserInput, {
    nullable: true
  })
  create?: PatientCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;
}
