import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotCreateManyInput } from "../../../inputs/AvailabilitySlotCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => [AvailabilitySlotCreateManyInput], {
    nullable: false
  })
  data!: AvailabilitySlotCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
