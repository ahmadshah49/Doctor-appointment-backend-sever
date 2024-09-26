import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutDoctorNestedInput } from "../inputs/AppointmentUpdateManyWithoutDoctorNestedInput";
import { AvailabilitySlotUpdateManyWithoutDoctorNestedInput } from "../inputs/AvailabilitySlotUpdateManyWithoutDoctorNestedInput";
import { EnumgenderFieldUpdateOperationsInput } from "../inputs/EnumgenderFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PatientUpdateManyWithoutDoctorNestedInput } from "../inputs/PatientUpdateManyWithoutDoctorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UnavailabilitySlotUpdateManyWithoutDoctorNestedInput } from "../inputs/UnavailabilitySlotUpdateManyWithoutDoctorNestedInput";

@TypeGraphQL.InputType("DoctorUpdateWithoutUserInput", {})
export class DoctorUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profilePhoto?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  availability?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAvailable?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: EnumgenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  patients?: PatientUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  AvailabilitySlot?: AvailabilitySlotUpdateManyWithoutDoctorNestedInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateManyWithoutDoctorNestedInput, {
    nullable: true
  })
  UnavailabilitySlot?: UnavailabilitySlotUpdateManyWithoutDoctorNestedInput | undefined;
}
