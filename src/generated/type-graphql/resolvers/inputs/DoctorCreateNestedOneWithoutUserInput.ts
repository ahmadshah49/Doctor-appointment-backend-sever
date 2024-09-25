import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutUserInput } from "../inputs/DoctorCreateOrConnectWithoutUserInput";
import { DoctorCreateWithoutUserInput } from "../inputs/DoctorCreateWithoutUserInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateNestedOneWithoutUserInput", {})
export class DoctorCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutUserInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;
}
