import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyPatientInput } from "../inputs/AppointmentCreateManyPatientInput";

@TypeGraphQL.InputType("AppointmentCreateManyPatientInputEnvelope", {})
export class AppointmentCreateManyPatientInputEnvelope {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyPatientInput], {
    nullable: false
  })
  data!: AppointmentCreateManyPatientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
