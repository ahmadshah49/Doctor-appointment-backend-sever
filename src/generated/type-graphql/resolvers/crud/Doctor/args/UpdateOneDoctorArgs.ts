import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorUpdateInput } from "../../../inputs/DoctorUpdateInput";
import { DoctorWhereUniqueInput } from "../../../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorUpdateInput, {
    nullable: false
  })
  data!: DoctorUpdateInput;

  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;
}
