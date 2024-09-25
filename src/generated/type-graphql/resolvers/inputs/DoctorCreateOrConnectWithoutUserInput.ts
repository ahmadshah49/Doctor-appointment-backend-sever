import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateWithoutUserInput } from "../inputs/DoctorCreateWithoutUserInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorCreateOrConnectWithoutUserInput", {})
export class DoctorCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateWithoutUserInput, {
    nullable: false
  })
  create!: DoctorCreateWithoutUserInput;
}
