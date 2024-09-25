import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorWhereUniqueInput } from "../../../inputs/DoctorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorWhereUniqueInput;
}
