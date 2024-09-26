import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotCreateInput } from "../../../inputs/UnavailabilitySlotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateInput, {
    nullable: false
  })
  data!: UnavailabilitySlotCreateInput;
}
