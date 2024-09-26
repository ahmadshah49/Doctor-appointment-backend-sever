import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotWhereUniqueInput } from "../../../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUnavailabilitySlotOrThrowArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: UnavailabilitySlotWhereUniqueInput;
}
