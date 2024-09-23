import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdatepresciptionsInput } from "../inputs/AppointmentUpdatepresciptionsInput";
import { NullableEnumgenderFieldUpdateOperationsInput } from "../inputs/NullableEnumgenderFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutAppointmentNestedInput } from "../inputs/UserUpdateOneWithoutAppointmentNestedInput";

@TypeGraphQL.InputType("AppointmentUpdateInput", {})
export class AppointmentUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  fullName?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  age?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumgenderFieldUpdateOperationsInput, {
    nullable: true
  })
  gender?: NullableEnumgenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phoneNo?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  medicalHistory?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentUpdatepresciptionsInput, {
    nullable: true
  })
  presciptions?: AppointmentUpdatepresciptionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutAppointmentNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutAppointmentNestedInput | undefined;
}
