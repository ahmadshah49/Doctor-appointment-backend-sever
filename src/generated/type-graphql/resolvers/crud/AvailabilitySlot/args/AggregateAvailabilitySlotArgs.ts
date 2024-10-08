import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotOrderByWithRelationInput } from "../../../inputs/AvailabilitySlotOrderByWithRelationInput";
import { AvailabilitySlotWhereInput } from "../../../inputs/AvailabilitySlotWhereInput";
import { AvailabilitySlotWhereUniqueInput } from "../../../inputs/AvailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  where?: AvailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AvailabilitySlotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: true
  })
  cursor?: AvailabilitySlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
