import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorUpdateManyMutationInput } from "../../../inputs/DoctorUpdateManyMutationInput";
import { DoctorWhereInput } from "../../../inputs/DoctorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDoctorArgs {
  @TypeGraphQL.Field(_type => DoctorUpdateManyMutationInput, {
    nullable: false
  })
  data!: DoctorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DoctorWhereInput, {
    nullable: true
  })
  where?: DoctorWhereInput | undefined;
}
