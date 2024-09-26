import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotCreateManyInput } from "../../../inputs/UnavailabilitySlotCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => [UnavailabilitySlotCreateManyInput], {
    nullable: false
  })
  data!: UnavailabilitySlotCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
