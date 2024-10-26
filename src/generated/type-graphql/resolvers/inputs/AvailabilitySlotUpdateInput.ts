import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput } from "../inputs/DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput";

@TypeGraphQL.InputType("AvailabilitySlotUpdateInput", {})
export class AvailabilitySlotUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  startTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  endTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput, {
    nullable: true
  })
  doctor?: DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput | undefined;
}
