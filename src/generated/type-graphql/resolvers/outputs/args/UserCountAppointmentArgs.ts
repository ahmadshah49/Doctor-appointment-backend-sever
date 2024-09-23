import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentWhereInput } from "../../inputs/AppointmentWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  where?: AppointmentWhereInput | undefined;
}
