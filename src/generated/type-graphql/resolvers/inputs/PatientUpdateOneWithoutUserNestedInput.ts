import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutUserInput } from "../inputs/PatientCreateOrConnectWithoutUserInput";
import { PatientCreateWithoutUserInput } from "../inputs/PatientCreateWithoutUserInput";
import { PatientUpdateToOneWithWhereWithoutUserInput } from "../inputs/PatientUpdateToOneWithWhereWithoutUserInput";
import { PatientUpsertWithoutUserInput } from "../inputs/PatientUpsertWithoutUserInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneWithoutUserNestedInput", {})
export class PatientUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutUserInput, {
    nullable: true
  })
  create?: PatientCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  disconnect?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  delete?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutUserInput | undefined;
}
