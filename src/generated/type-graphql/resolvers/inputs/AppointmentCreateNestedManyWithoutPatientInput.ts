import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyPatientInputEnvelope } from "../inputs/AppointmentCreateManyPatientInputEnvelope";
import { AppointmentCreateOrConnectWithoutPatientInput } from "../inputs/AppointmentCreateOrConnectWithoutPatientInput";
import { AppointmentCreateWithoutPatientInput } from "../inputs/AppointmentCreateWithoutPatientInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedManyWithoutPatientInput", {})
export class AppointmentCreateNestedManyWithoutPatientInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutPatientInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutPatientInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyPatientInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyPatientInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;
}
