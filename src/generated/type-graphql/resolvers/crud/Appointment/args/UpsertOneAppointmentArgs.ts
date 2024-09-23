import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentCreateInput } from "../../../inputs/AppointmentCreateInput";
import { AppointmentUpdateInput } from "../../../inputs/AppointmentUpdateInput";
import { AppointmentWhereUniqueInput } from "../../../inputs/AppointmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: false
  })
  where!: AppointmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppointmentCreateInput, {
    nullable: false
  })
  create!: AppointmentCreateInput;

  @TypeGraphQL.Field(_type => AppointmentUpdateInput, {
    nullable: false
  })
  update!: AppointmentUpdateInput;
}
