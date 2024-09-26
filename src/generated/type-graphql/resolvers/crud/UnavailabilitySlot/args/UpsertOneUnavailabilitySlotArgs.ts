import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotCreateInput } from "../../../inputs/UnavailabilitySlotCreateInput";
import { UnavailabilitySlotUpdateInput } from "../../../inputs/UnavailabilitySlotUpdateInput";
import { UnavailabilitySlotWhereUniqueInput } from "../../../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: UnavailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotCreateInput, {
    nullable: false
  })
  create!: UnavailabilitySlotCreateInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateInput, {
    nullable: false
  })
  update!: UnavailabilitySlotUpdateInput;
}
