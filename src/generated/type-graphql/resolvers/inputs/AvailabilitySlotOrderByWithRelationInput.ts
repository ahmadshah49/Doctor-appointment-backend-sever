import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorOrderByWithRelationInput } from "../inputs/DoctorOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AvailabilitySlotOrderByWithRelationInput", {})
export class AvailabilitySlotOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doctorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DoctorOrderByWithRelationInput, {
    nullable: true
  })
  doctor?: DoctorOrderByWithRelationInput | undefined;
}
