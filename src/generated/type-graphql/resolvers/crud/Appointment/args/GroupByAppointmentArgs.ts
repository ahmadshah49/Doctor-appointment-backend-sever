import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentOrderByWithAggregationInput } from "../../../inputs/AppointmentOrderByWithAggregationInput";
import { AppointmentScalarWhereWithAggregatesInput } from "../../../inputs/AppointmentScalarWhereWithAggregatesInput";
import { AppointmentWhereInput } from "../../../inputs/AppointmentWhereInput";
import { AppointmentScalarFieldEnum } from "../../../../enums/AppointmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAppointmentArgs {
  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  where?: AppointmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AppointmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AppointmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "fullName" | "age" | "gender" | "phoneNo" | "address" | "medicalHistory" | "presciptions" | "details" | "scheduledDate" | "status" | "doctorId" | "patientId">;

  @TypeGraphQL.Field(_type => AppointmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AppointmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
