import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutAppointmentsInput } from "../inputs/DoctorCreateOrConnectWithoutAppointmentsInput";
import { DoctorCreateWithoutAppointmentsInput } from "../inputs/DoctorCreateWithoutAppointmentsInput";
import { DoctorUpdateToOneWithWhereWithoutAppointmentsInput } from "../inputs/DoctorUpdateToOneWithWhereWithoutAppointmentsInput";
import { DoctorUpsertWithoutAppointmentsInput } from "../inputs/DoctorUpsertWithoutAppointmentsInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneWithoutAppointmentsNestedInput", {})
export class DoctorUpdateOneWithoutAppointmentsNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutAppointmentsInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutAppointmentsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutAppointmentsInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutAppointmentsInput | undefined;

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

  @TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutAppointmentsInput, {
    nullable: true
  })
  update?: DoctorUpdateToOneWithWhereWithoutAppointmentsInput | undefined;
}
