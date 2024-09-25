import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotWhereUniqueInput } from "../../../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAvailabilitySlotOrThrowArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;
}
