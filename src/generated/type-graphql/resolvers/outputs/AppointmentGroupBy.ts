import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentAvgAggregate } from "../outputs/AppointmentAvgAggregate";
import { AppointmentCountAggregate } from "../outputs/AppointmentCountAggregate";
import { AppointmentMaxAggregate } from "../outputs/AppointmentMaxAggregate";
import { AppointmentMinAggregate } from "../outputs/AppointmentMinAggregate";
import { AppointmentSumAggregate } from "../outputs/AppointmentSumAggregate";
import { AppointmentStatus } from "../../enums/AppointmentStatus";
import { gender } from "../../enums/gender";

@TypeGraphQL.ObjectType("AppointmentGroupBy", {})
export class AppointmentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fullName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  age!: string | null;

  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  medicalHistory!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  presciptions!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledDate!: Date;

  @TypeGraphQL.Field(_type => AppointmentStatus, {
    nullable: true
  })
  status!: "UPCOMING" | "IN_PROGRESS" | "MISSED" | "COMPLETED" | "CANCELLED" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  patientId!: number | null;

  @TypeGraphQL.Field(_type => AppointmentCountAggregate, {
    nullable: true
  })
  _count!: AppointmentCountAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentAvgAggregate, {
    nullable: true
  })
  _avg!: AppointmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentSumAggregate, {
    nullable: true
  })
  _sum!: AppointmentSumAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentMinAggregate, {
    nullable: true
  })
  _min!: AppointmentMinAggregate | null;

  @TypeGraphQL.Field(_type => AppointmentMaxAggregate, {
    nullable: true
  })
  _max!: AppointmentMaxAggregate | null;
}
