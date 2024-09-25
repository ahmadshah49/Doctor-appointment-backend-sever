import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateOrConnectWithoutAppointmentsInput } from "../inputs/PatientCreateOrConnectWithoutAppointmentsInput";
import { PatientCreateWithoutAppointmentsInput } from "../inputs/PatientCreateWithoutAppointmentsInput";
import { PatientUpdateToOneWithWhereWithoutAppointmentsInput } from "../inputs/PatientUpdateToOneWithWhereWithoutAppointmentsInput";
import { PatientUpsertWithoutAppointmentsInput } from "../inputs/PatientUpsertWithoutAppointmentsInput";
import { PatientWhereInput } from "../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateOneWithoutAppointmentsNestedInput", {})
export class PatientUpdateOneWithoutAppointmentsNestedInput {
  @TypeGraphQL.Field(_type => PatientCreateWithoutAppointmentsInput, {
    nullable: true
  })
  create?: PatientCreateWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientCreateOrConnectWithoutAppointmentsInput, {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpsertWithoutAppointmentsInput, {
    nullable: true
  })
  upsert?: PatientUpsertWithoutAppointmentsInput | undefined;

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

  @TypeGraphQL.Field(_type => PatientUpdateToOneWithWhereWithoutAppointmentsInput, {
    nullable: true
  })
  update?: PatientUpdateToOneWithWhereWithoutAppointmentsInput | undefined;
}
