import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AvailabilitySlotCreateManyDoctorInput } from "../inputs/AvailabilitySlotCreateManyDoctorInput";

@TypeGraphQL.InputType("AvailabilitySlotCreateManyDoctorInputEnvelope", {})
export class AvailabilitySlotCreateManyDoctorInputEnvelope {
  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateManyDoctorInput], {
    nullable: false
  })
  data!: AvailabilitySlotCreateManyDoctorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
