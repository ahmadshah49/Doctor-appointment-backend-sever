import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorCreateManyInput } from "../../../inputs/DoctorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDoctorArgs {
  @TypeGraphQL.Field(_type => [DoctorCreateManyInput], {
    nullable: false
  })
  data!: DoctorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
