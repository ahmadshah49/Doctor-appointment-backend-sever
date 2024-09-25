import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorUpdateWithoutAppointmentsInput } from "../inputs/DoctorUpdateWithoutAppointmentsInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";

@TypeGraphQL.InputType("DoctorUpdateToOneWithWhereWithoutAppointmentsInput", {})
export class DoctorUpdateToOneWithWhereWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateWithoutAppointmentsInput, {
    nullable: false
  })
  data!: DoctorUpdateWithoutAppointmentsInput;
}
