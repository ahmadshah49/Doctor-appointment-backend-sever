import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PatientOrderByWithAggregationInput } from "../../../inputs/PatientOrderByWithAggregationInput";
import { PatientScalarWhereWithAggregatesInput } from "../../../inputs/PatientScalarWhereWithAggregatesInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientScalarFieldEnum } from "../../../../enums/PatientScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, {
    nullable: true
  })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PatientOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PatientScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "age" | "fullName" | "gender" | "address" | "email" | "profilePicture" | "phoneNo" | "doctorId" | "userId">;

  @TypeGraphQL.Field(_type => PatientScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PatientScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
