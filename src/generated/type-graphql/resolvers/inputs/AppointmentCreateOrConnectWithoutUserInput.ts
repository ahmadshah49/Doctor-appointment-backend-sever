import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateWithoutUserInput } from "../inputs/AppointmentCreateWithoutUserInput";
import { AppointmentWhereUniqueInput } from "../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.InputType("AppointmentCreateOrConnectWithoutUserInput", {})
export class AppointmentCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentCreateWithoutUserInput, {
    nullable: false
  })
  create!: AppointmentCreateWithoutUserInput;
}
