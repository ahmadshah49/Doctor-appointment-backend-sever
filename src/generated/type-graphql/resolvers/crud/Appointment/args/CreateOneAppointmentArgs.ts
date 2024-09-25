import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentCreateInput } from "../../../inputs/AppointmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentCreateInput, {
    nullable: false
  })
  data!: AppointmentCreateInput;
}
