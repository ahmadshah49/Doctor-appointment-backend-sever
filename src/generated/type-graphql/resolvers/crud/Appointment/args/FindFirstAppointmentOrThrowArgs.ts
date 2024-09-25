import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppointmentOrderByWithRelationInput } from "../../../inputs/AppointmentOrderByWithRelationInput";
import { AppointmentWhereInput } from "../../../inputs/AppointmentWhereInput";
import { AppointmentWhereUniqueInput } from "../../../inputs/AppointmentWhereUniqueInput";
import { AppointmentScalarFieldEnum } from "../../../../enums/AppointmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAppointmentOrThrowArgs {
  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  where?: AppointmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AppointmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AppointmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: AppointmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AppointmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "fullName" | "age" | "gender" | "phoneNo" | "address" | "medicalHistory" | "presciptions" | "details" | "scheduledDate" | "status" | "doctorId" | "patientId"> | undefined;
}
