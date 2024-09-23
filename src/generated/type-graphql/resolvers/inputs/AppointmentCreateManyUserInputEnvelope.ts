import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyUserInput } from "../inputs/AppointmentCreateManyUserInput";

@TypeGraphQL.InputType("AppointmentCreateManyUserInputEnvelope", {})
export class AppointmentCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyUserInput], {
    nullable: false
  })
  data!: AppointmentCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
