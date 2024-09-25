import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyDoctorInputEnvelope } from "../inputs/AppointmentCreateManyDoctorInputEnvelope";
import { AppointmentCreateOrConnectWithoutDoctorInput } from "../inputs/AppointmentCreateOrConnectWithoutDoctorInput";
import { AppointmentCreateWithoutDoctorInput } from "../inputs/AppointmentCreateWithoutDoctorInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateNestedManyWithoutDoctorInput", {})
export class AppointmentCreateNestedManyWithoutDoctorInput {
  @TypeGraphQL.Field(_type => [AppointmentCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: AppointmentCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: AppointmentCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppointmentWhereUniqueInput], {
    nullable: true
  })
  connect?: AppointmentWhereUniqueInput[] | undefined;
}
