import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentUpdateInput } from "../../../inputs/AppointmentUpdateInput";
import { AppointmentWhereUniqueInput } from "../../../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentUpdateInput, {
    nullable: false
  })
  data!: AppointmentUpdateInput;

  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;
}
