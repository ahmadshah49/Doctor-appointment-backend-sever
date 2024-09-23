import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentAvgOrderByAggregateInput } from "../inputs/AppointmentAvgOrderByAggregateInput";
import { AppointmentCountOrderByAggregateInput } from "../inputs/AppointmentCountOrderByAggregateInput";
import { AppointmentMaxOrderByAggregateInput } from "../inputs/AppointmentMaxOrderByAggregateInput";
import { AppointmentMinOrderByAggregateInput } from "../inputs/AppointmentMinOrderByAggregateInput";
import { AppointmentSumOrderByAggregateInput } from "../inputs/AppointmentSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppointmentOrderByWithAggregationInput", {})
export class AppointmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  userId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  fullName?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  age?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  gender?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  phoneNo?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  medicalHistory?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  presciptions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AppointmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AppointmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AppointmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AppointmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AppointmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AppointmentSumOrderByAggregateInput | undefined;
}
