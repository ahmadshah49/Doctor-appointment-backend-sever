import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorWhereInput } from "../../inputs/DoctorWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPatientDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;
}
