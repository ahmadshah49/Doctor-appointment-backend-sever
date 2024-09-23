import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreatepresciptionsInput } from "../inputs/AppointmentCreatepresciptionsInput";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("AppointmentCreateWithoutUserInput", {})
export class AppointmentCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  age?: string | undefined;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender?: "MAlE" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory?: string | undefined;

  @TypeGraphQL.Field(_type => AppointmentCreatepresciptionsInput, {
    nullable: true
  })
  presciptions?: AppointmentCreatepresciptionsInput | undefined;
}
