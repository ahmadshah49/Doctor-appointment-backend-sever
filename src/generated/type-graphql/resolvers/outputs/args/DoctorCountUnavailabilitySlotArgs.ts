import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotWhereInput } from "../../inputs/UnavailabilitySlotWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorCountUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  where?: UnavailabilitySlotWhereInput | undefined;
}
