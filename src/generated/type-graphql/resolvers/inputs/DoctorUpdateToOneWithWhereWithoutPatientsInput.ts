import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateWithoutPatientsInput } from "../inputs/DoctorUpdateWithoutPatientsInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpdateToOneWithWhereWithoutPatientsInput", {})
export class DoctorUpdateToOneWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutPatientsInput, {
    nullable: false
  })
  data!: DoctorUpdateWithoutPatientsInput;
}
