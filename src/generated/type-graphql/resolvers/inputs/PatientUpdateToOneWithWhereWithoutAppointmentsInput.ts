import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientUpdateWithoutAppointmentsInput } from "../inputs/PatientUpdateWithoutAppointmentsInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";

@TypeGraphQL.InputType("PatientUpdateToOneWithWhereWithoutAppointmentsInput", {})
export class PatientUpdateToOneWithWhereWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateWithoutAppointmentsInput, {
    nullable: false
  })
  data!: PatientUpdateWithoutAppointmentsInput;
}
