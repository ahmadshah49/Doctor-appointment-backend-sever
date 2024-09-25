import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotWhereInput } from "../../inputs/AvailabilitySlotWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorCountAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  where?: AvailabilitySlotWhereInput | undefined;
}
