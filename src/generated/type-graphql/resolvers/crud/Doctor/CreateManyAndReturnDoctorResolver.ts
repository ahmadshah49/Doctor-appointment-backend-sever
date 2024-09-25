import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDoctorArgs } from "./args/CreateManyAndReturnDoctorArgs";
import { Doctor } from "../../../models/Doctor";
import { CreateManyAndReturnDoctor } from "../../outputs/CreateManyAndReturnDoctor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor)
export class CreateManyAndReturnDoctorResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDoctor], {
    nullable: false
  })
  async createManyAndReturnDoctor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDoctorArgs): Promise<CreateManyAndReturnDoctor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
