import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutUserInput } from "../inputs/DoctorCreateOrConnectWithoutUserInput";
import { DoctorCreateWithoutUserInput } from "../inputs/DoctorCreateWithoutUserInput";
import { DoctorUpdateToOneWithWhereWithoutUserInput } from "../inputs/DoctorUpdateToOneWithWhereWithoutUserInput";
import { DoctorUpsertWithoutUserInput } from "../inputs/DoctorUpsertWithoutUserInput";
import { DoctorWhereInput } from "../inputs/DoctorWhereInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneWithoutUserNestedInput", {})
export class DoctorUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutUserInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutUserInput | undefined;

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

  @TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: DoctorUpdateToOneWithWhereWithoutUserInput | undefined;
}
