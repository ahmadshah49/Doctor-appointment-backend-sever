import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorCreateInput } from "../../../inputs/DoctorCreateInput";
import { DoctorUpdateInput } from "../../../inputs/DoctorUpdateInput";
import { DoctorWhereUniqueInput } from "../../../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DoctorCreateInput, {
    nullable: false
  })
  create!: DoctorCreateInput;

  @TypeGraphQL.Field(_type => DoctorUpdateInput, {
    nullable: false
  })
  update!: DoctorUpdateInput;
}
