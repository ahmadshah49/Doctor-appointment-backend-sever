import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyUnavailabilitySlotArgs } from "./args/FindManyUnavailabilitySlotArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class FindManyUnavailabilitySlotResolver {
  @TypeGraphQL.Query(_returns => [UnavailabilitySlot], {
    nullable: false
  })
  async unavailabilitySlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUnavailabilitySlotArgs): Promise<UnavailabilitySlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
