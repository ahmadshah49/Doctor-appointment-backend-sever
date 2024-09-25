import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorOrderByWithAggregationInput } from "../../../inputs/DoctorOrderByWithAggregationInput";
import { DoctorScalarWhereWithAggregatesInput } from "../../../inputs/DoctorScalarWhereWithAggregatesInput";
import { DoctorWhereInput } from "../../../inputs/DoctorWhereInput";
import { DoctorScalarFieldEnum } from "../../../../enums/DoctorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DoctorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DoctorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "name" | "profilePhoto" | "address" | "availability" | "email" | "isAvailable" | "gender">;

  @TypeGraphQL.Field(_type => DoctorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DoctorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
