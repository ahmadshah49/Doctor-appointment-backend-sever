import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateOrConnectWithoutAvailabilitySlotInput";
import { DoctorCreateWithoutAvailabilitySlotInput } from "../inputs/DoctorCreateWithoutAvailabilitySlotInput";
import { DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput } from "../inputs/DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput";
import { DoctorUpsertWithoutAvailabilitySlotInput } from "../inputs/DoctorUpsertWithoutAvailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput", {})
export class DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutAvailabilitySlotInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutAvailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutAvailabilitySlotInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutAvailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutAvailabilitySlotInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutAvailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput, {
    nullable: true
  })
  update?: DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput | undefined;
}
