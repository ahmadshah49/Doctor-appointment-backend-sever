import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotUpdateInput } from "../../../inputs/AvailabilitySlotUpdateInput";
import { AvailabilitySlotWhereUniqueInput } from "../../../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateInput, {
    nullable: false
  })
  data!: AvailabilitySlotUpdateInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: false
  })
  where!: AvailabilitySlotWhereUniqueInput;
}
