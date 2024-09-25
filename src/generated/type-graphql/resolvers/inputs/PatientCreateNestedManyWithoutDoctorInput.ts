import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateManyDoctorInputEnvelope } from "../inputs/PatientCreateManyDoctorInputEnvelope";
import { PatientCreateOrConnectWithoutDoctorInput } from "../inputs/PatientCreateOrConnectWithoutDoctorInput";
import { PatientCreateWithoutDoctorInput } from "../inputs/PatientCreateWithoutDoctorInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientCreateNestedManyWithoutDoctorInput", {})
export class PatientCreateNestedManyWithoutDoctorInput {
  @TypeGraphQL.Field(_type => [PatientCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: PatientCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: PatientCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientWhereUniqueInput[] | undefined;
}
