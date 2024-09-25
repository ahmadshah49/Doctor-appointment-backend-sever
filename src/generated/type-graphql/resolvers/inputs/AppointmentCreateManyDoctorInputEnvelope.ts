import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentCreateManyDoctorInput } from "../inputs/AppointmentCreateManyDoctorInput";

@TypeGraphQL.InputType("AppointmentCreateManyDoctorInputEnvelope", {})
export class AppointmentCreateManyDoctorInputEnvelope {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyDoctorInput], {
    nullable: false
  })
  data!: AppointmentCreateManyDoctorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
