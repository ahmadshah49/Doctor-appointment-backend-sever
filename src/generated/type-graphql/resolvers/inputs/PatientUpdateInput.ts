import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateManyWithoutPatientNestedInput } from "../inputs/AppointmentUpdateManyWithoutPatientNestedInput";
import { DoctorUpdateOneWithoutPatientsNestedInput } from "../inputs/DoctorUpdateOneWithoutPatientsNestedInput";
import { EnumgenderFieldUpdateOperationsInput } from "../inputs/EnumgenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPatientNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPatientNestedInput";

@TypeGraphQL.InputType("PatientUpdateInput", {})
export class PatientUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  fullName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumgenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: EnumgenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profilePicture?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  phoneNo?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorUpdateOneWithoutPatientsNestedInput, {
    nullable: true
  })
  Doctor?: DoctorUpdateOneWithoutPatientsNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPatientNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutPatientNestedInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdateManyWithoutPatientNestedInput, {
    nullable: true
  })
  appointments?: AppointmentUpdateManyWithoutPatientNestedInput | undefined;
}
