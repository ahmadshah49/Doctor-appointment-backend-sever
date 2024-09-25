import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutPatientsInput } from "../inputs/DoctorCreateOrConnectWithoutPatientsInput";
import { DoctorCreateWithoutPatientsInput } from "../inputs/DoctorCreateWithoutPatientsInput";
import { DoctorUpdateToOneWithWhereWithoutPatientsInput } from "../inputs/DoctorUpdateToOneWithWhereWithoutPatientsInput";
import { DoctorUpsertWithoutPatientsInput } from "../inputs/DoctorUpsertWithoutPatientsInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneWithoutPatientsNestedInput", {})
export class DoctorUpdateOneWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutPatientsInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutPatientsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutPatientsInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  disconnect?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  delete?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutPatientsInput, {
    nullable: true
  })
  update?: DoctorUpdateToOneWithWhereWithoutPatientsInput | undefined;
}
