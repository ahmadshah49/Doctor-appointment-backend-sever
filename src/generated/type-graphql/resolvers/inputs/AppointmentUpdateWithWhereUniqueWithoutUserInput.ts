import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentUpdateWithoutUserInput } from "../inputs/AppointmentUpdateWithoutUserInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentUpdateWithWhereUniqueWithoutUserInput", {})
export class AppointmentUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateWithoutUserInput, {
    nullable: false
  })
  data!: AppointmentUpdateWithoutUserInput;
}
