import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorCreateInput } from "../../../inputs/DoctorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorCreateInput, {
    nullable: false
  })
  data!: DoctorCreateInput;
}
