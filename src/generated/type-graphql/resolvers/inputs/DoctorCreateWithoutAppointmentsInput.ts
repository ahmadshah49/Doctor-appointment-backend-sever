import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateNestedManyWithoutDoctorInput } from "../inputs/AvailabilitySlotCreateNestedManyWithoutDoctorInput";
import { PatientCreateNestedManyWithoutDoctorInput } from "../inputs/PatientCreateNestedManyWithoutDoctorInput";
import { UnavailabilitySlotCreateNestedManyWithoutDoctorInput } from "../inputs/UnavailabilitySlotCreateNestedManyWithoutDoctorInput";
import { UserCreateNestedOneWithoutDoctorInput } from "../inputs/UserCreateNestedOneWithoutDoctorInput";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("DoctorCreateWithoutAppointmentsInput", {})
export class DoctorCreateWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePhoto?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  availability?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAvailable?: boolean | undefined;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutDoctorInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutDoctorInput;

  @TypeGraphQL.Field(_type => PatientCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  patients?: PatientCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  AvailabilitySlot?: AvailabilitySlotCreateNestedManyWithoutDoctorInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateNestedManyWithoutDoctorInput, {
    nullable: true
  })
  UnavailabilitySlot?: UnavailabilitySlotCreateNestedManyWithoutDoctorInput | undefined;
}