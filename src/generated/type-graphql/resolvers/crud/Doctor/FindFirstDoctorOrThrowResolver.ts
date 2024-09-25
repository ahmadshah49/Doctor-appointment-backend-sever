import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDoctorOrThrowArgs } from "./args/FindFirstDoctorOrThrowArgs";
import { Doctor } from "../../../models/Doctor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor)
export class FindFirstDoctorOrThrowResolver {
  @TypeGraphQL.Query(_returns => Doctor, {
    nullable: true
  })
  async findFirstDoctorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDoctorOrThrowArgs): Promise<Doctor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).doctor.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
