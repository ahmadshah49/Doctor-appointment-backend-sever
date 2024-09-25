import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDoctorArgs } from "./args/AggregateDoctorArgs";
import { Doctor } from "../../../models/Doctor";
import { AggregateDoctor } from "../../outputs/AggregateDoctor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Doctor)
export class AggregateDoctorResolver {
  @TypeGraphQL.Query(_returns => AggregateDoctor, {
    nullable: false
  })
  async aggregateDoctor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDoctorArgs): Promise<AggregateDoctor> {
    return getPrismaFromContext(ctx).doctor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
