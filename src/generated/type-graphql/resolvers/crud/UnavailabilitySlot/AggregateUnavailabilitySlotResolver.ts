import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUnavailabilitySlotArgs } from "./args/AggregateUnavailabilitySlotArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { AggregateUnavailabilitySlot } from "../../outputs/AggregateUnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class AggregateUnavailabilitySlotResolver {
  @TypeGraphQL.Query(_returns => AggregateUnavailabilitySlot, {
    nullable: false
  })
  async aggregateUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUnavailabilitySlotArgs): Promise<AggregateUnavailabilitySlot> {
    return getPrismaFromContext(ctx).unavailabilitySlot.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
