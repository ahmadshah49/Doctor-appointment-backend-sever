import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateOrConnectWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateOrConnectWithoutUnavailabilitySlotInput";
import { DoctorCreateWithoutUnavailabilitySlotInput } from "../inputs/DoctorCreateWithoutUnavailabilitySlotInput";
import { DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput } from "../inputs/DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput";
import { DoctorUpsertWithoutUnavailabilitySlotInput } from "../inputs/DoctorUpsertWithoutUnavailabilitySlotInput";
import { DoctorWhereUniqueInput } from "../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.InputType("DoctorUpdateOneRequiredWithoutUnavailabilitySlotNestedInput", {})
export class DoctorUpdateOneRequiredWithoutUnavailabilitySlotNestedInput {
  @TypeGraphQL.Field(_type => DoctorCreateWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  create?: DoctorCreateWithoutUnavailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorCreateOrConnectWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  connectOrCreate?: DoctorCreateOrConnectWithoutUnavailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpsertWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  upsert?: DoctorUpsertWithoutUnavailabilitySlotInput | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput, {
    nullable: true
  })
  update?: DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput | undefined;
}
