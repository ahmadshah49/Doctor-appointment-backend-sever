import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorAvgOrderByAggregateInput } from "../inputs/DoctorAvgOrderByAggregateInput";
import { DoctorCountOrderByAggregateInput } from "../inputs/DoctorCountOrderByAggregateInput";
import { DoctorMaxOrderByAggregateInput } from "../inputs/DoctorMaxOrderByAggregateInput";
import { DoctorMinOrderByAggregateInput } from "../inputs/DoctorMinOrderByAggregateInput";
import { DoctorSumOrderByAggregateInput } from "../inputs/DoctorSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DoctorOrderByWithAggregationInput", {})
export class DoctorOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => DoctorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DoctorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DoctorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DoctorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DoctorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DoctorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DoctorSumOrderByAggregateInput | undefined;
}
