import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotOrderByWithRelationInput } from "../../../inputs/UnavailabilitySlotOrderByWithRelationInput";
import { UnavailabilitySlotWhereInput } from "../../../inputs/UnavailabilitySlotWhereInput";
import { UnavailabilitySlotWhereUniqueInput } from "../../../inputs/UnavailabilitySlotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  where?: UnavailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UnavailabilitySlotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: true
  })
  cursor?: UnavailabilitySlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
