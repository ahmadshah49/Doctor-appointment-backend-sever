import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotCreateInput } from "../../../inputs/AvailabilitySlotCreateInput";
import { AvailabilitySlotUpdateInput } from "../../../inputs/AvailabilitySlotUpdateInput";
import { AvailabilitySlotWhereUniqueInput } from "../../../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotCreateInput, {
    nullable: false
  })
  create!: AvailabilitySlotCreateInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateInput, {
    nullable: false
  })
  update!: AvailabilitySlotUpdateInput;
}
