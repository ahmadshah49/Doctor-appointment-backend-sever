import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotUpdateManyMutationInput } from "../../../inputs/UnavailabilitySlotUpdateManyMutationInput";
import { UnavailabilitySlotWhereInput } from "../../../inputs/UnavailabilitySlotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotUpdateManyMutationInput, {
    nullable: false
  })
  data!: UnavailabilitySlotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  where?: UnavailabilitySlotWhereInput | undefined;
}
