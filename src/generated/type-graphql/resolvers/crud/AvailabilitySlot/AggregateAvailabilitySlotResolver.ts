import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAvailabilitySlotArgs } from "./args/AggregateAvailabilitySlotArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { AggregateAvailabilitySlot } from "../../outputs/AggregateAvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class AggregateAvailabilitySlotResolver {
  @TypeGraphQL.Query(_returns => AggregateAvailabilitySlot, {
    nullable: false
  })
  async aggregateAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAvailabilitySlotArgs): Promise<AggregateAvailabilitySlot> {
    return getPrismaFromContext(ctx).availabilitySlot.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
