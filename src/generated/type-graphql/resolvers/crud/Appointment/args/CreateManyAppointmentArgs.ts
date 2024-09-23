import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentCreateManyInput } from "../../../inputs/AppointmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAppointmentArgs {
  @TypeGraphQL.Field(_type => [AppointmentCreateManyInput], {
    nullable: false
  })
  data!: AppointmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
