import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAvailabilitySlotArgs } from "./args/GroupByAvailabilitySlotArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { AvailabilitySlotGroupBy } from "../../outputs/AvailabilitySlotGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class GroupByAvailabilitySlotResolver {
  @TypeGraphQL.Query(_returns => [AvailabilitySlotGroupBy], {
    nullable: false
  })
  async groupByAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAvailabilitySlotArgs): Promise<AvailabilitySlotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
