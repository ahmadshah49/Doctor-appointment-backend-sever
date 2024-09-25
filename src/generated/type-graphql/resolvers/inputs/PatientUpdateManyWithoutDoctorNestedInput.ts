import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientCreateManyDoctorInputEnvelope } from "../inputs/PatientCreateManyDoctorInputEnvelope";
import { PatientCreateOrConnectWithoutDoctorInput } from "../inputs/PatientCreateOrConnectWithoutDoctorInput";
import { PatientCreateWithoutDoctorInput } from "../inputs/PatientCreateWithoutDoctorInput";
import { PatientScalarWhereInput } from "../inputs/PatientScalarWhereInput";
import { PatientUpdateManyWithWhereWithoutDoctorInput } from "../inputs/PatientUpdateManyWithWhereWithoutDoctorInput";
import { PatientUpdateWithWhereUniqueWithoutDoctorInput } from "../inputs/PatientUpdateWithWhereUniqueWithoutDoctorInput";
import { PatientUpsertWithWhereUniqueWithoutDoctorInput } from "../inputs/PatientUpsertWithWhereUniqueWithoutDoctorInput";
import { PatientWhereUniqueInput } from "../inputs/PatientWhereUniqueInput";

@TypeGraphQL.InputType("PatientUpdateManyWithoutDoctorNestedInput", {})
export class PatientUpdateManyWithoutDoctorNestedInput {
  @TypeGraphQL.Field(_type => [PatientCreateWithoutDoctorInput], {
    nullable: true
  })
  create?: PatientCreateWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientCreateOrConnectWithoutDoctorInput], {
    nullable: true
  })
  connectOrCreate?: PatientCreateOrConnectWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpsertWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  upsert?: PatientUpsertWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientCreateManyDoctorInputEnvelope, {
    nullable: true
  })
  createMany?: PatientCreateManyDoctorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  set?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  delete?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereUniqueInput], {
    nullable: true
  })
  connect?: PatientWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpdateWithWhereUniqueWithoutDoctorInput], {
    nullable: true
  })
  update?: PatientUpdateWithWhereUniqueWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientUpdateManyWithWhereWithoutDoctorInput], {
    nullable: true
  })
  updateMany?: PatientUpdateManyWithWhereWithoutDoctorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PatientScalarWhereInput[] | undefined;
}
