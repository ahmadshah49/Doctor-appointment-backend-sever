import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCreateNestedOneWithoutPatientsInput } from "../inputs/DoctorCreateNestedOneWithoutPatientsInput";
import { UserCreateNestedOneWithoutPatientInput } from "../inputs/UserCreateNestedOneWithoutPatientInput";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("PatientCreateWithoutAppointmentsInput", {})
export class PatientCreateWithoutAppointmentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullName!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePicture?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNo!: string;

  @TypeGraphQL.Field(_type => DoctorCreateNestedOneWithoutPatientsInput, {
    nullable: true
  })
  Doctor?: DoctorCreateNestedOneWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPatientInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutPatientInput;
}
