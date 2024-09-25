import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotCreateInput } from "../../../inputs/AvailabilitySlotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotCreateInput, {
    nullable: false
  })
  data!: AvailabilitySlotCreateInput;
}
