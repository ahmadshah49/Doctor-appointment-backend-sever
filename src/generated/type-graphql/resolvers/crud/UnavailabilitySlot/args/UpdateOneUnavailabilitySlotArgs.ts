import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotUpdateInput } from "../../../inputs/UnavailabilitySlotUpdateInput";
import { UnavailabilitySlotWhereUniqueInput } from "../../../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateInput, {
    nullable: false
  })
  data!: UnavailabilitySlotUpdateInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: UnavailabilitySlotWhereUniqueInput;
}
