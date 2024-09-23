import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentUpdateManyMutationInput } from "../../../inputs/AppointmentUpdateManyMutationInput";
import { AppointmentWhereInput } from "../../../inputs/AppointmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: AppointmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  where?: AppointmentWhereInput | undefined;
}
