import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateNestedManyWithoutPatientInput } from "../inputs/AppointmentCreateNestedManyWithoutPatientInput";
import { DoctorCreateNestedOneWithoutPatientsInput } from "../inputs/DoctorCreateNestedOneWithoutPatientsInput";
import { UserCreateNestedOneWithoutPatientInput } from "../inputs/UserCreateNestedOneWithoutPatientInput";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("PatientCreateInput", {})
export class PatientCreateInput {
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
  gender!: "MALE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

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

  @TypeGraphQL.Field(_type => AppointmentCreateNestedManyWithoutPatientInput, {
    nullable: true
  })
  appointments?: AppointmentCreateNestedManyWithoutPatientInput | undefined;
}
