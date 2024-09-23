import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAppointmentArgs } from "./args/GroupByAppointmentArgs";
import { Appointment } from "../../../models/Appointment";
import { AppointmentGroupBy } from "../../outputs/AppointmentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class GroupByAppointmentResolver {
  @TypeGraphQL.Query(_returns => [AppointmentGroupBy], {
    nullable: false
  })
  async groupByAppointment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAppointmentArgs): Promise<AppointmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
