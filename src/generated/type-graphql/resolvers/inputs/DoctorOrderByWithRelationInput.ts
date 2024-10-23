import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentOrderByRelationAggregateInput } from "../inputs/AppointmentOrderByRelationAggregateInput";
import { AvailabilitySlotOrderByRelationAggregateInput } from "../inputs/AvailabilitySlotOrderByRelationAggregateInput";
import { PatientOrderByRelationAggregateInput } from "../inputs/PatientOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UnavailabilitySlotOrderByRelationAggregateInput } from "../inputs/UnavailabilitySlotOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DoctorOrderByWithRelationInput", {})
export class DoctorOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  profilePhoto?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  User?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PatientOrderByRelationAggregateInput, {
    nullable: true
  })
  patients?: PatientOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentOrderByRelationAggregateInput, {
    nullable: true
  })
  appointments?: AppointmentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotOrderByRelationAggregateInput, {
    nullable: true
  })
  AvailabilitySlot?: AvailabilitySlotOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotOrderByRelationAggregateInput, {
    nullable: true
  })
  UnavailabilitySlot?: UnavailabilitySlotOrderByRelationAggregateInput | undefined;
}
