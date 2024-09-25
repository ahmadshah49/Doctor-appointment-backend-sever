import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotUpdateManyMutationInput } from "../../../inputs/AvailabilitySlotUpdateManyMutationInput";
import { AvailabilitySlotWhereInput } from "../../../inputs/AvailabilitySlotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: AvailabilitySlotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  where?: AvailabilitySlotWhereInput | undefined;
}
