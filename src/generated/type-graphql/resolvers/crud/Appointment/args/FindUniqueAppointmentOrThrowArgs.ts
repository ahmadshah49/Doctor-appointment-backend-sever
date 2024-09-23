import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentWhereUniqueInput } from "../../../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAppointmentOrThrowArgs {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;
}
