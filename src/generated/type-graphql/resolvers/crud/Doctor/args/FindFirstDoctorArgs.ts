import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorOrderByWithRelationInput } from "../../../inputs/DoctorOrderByWithRelationInput";
import { DoctorWhereInput } from "../../../inputs/DoctorWhereInput";
import { DoctorWhereUniqueInput } from "../../../inputs/DoctorWhereUniqueInput";
import { DoctorScalarFieldEnum } from "../../../../enums/DoctorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DoctorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DoctorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: true
  })
  cursor?: DoctorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DoctorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "name" | "profilePhoto" | "address" | "email" | "gender"> | undefined;
}
