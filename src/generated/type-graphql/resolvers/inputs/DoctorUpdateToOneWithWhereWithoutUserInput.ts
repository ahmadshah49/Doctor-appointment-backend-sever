import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateWithoutUserInput } from "../inputs/DoctorUpdateWithoutUserInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpdateToOneWithWhereWithoutUserInput", {})
export class DoctorUpdateToOneWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutUserInput, {
    nullable: false
  })
  data!: DoctorUpdateWithoutUserInput;
}
