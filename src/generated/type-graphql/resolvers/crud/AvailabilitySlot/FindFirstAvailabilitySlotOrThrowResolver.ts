import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAvailabilitySlotOrThrowArgs } from "./args/FindFirstAvailabilitySlotOrThrowArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class FindFirstAvailabilitySlotOrThrowResolver {
  @TypeGraphQL.Query(_returns => AvailabilitySlot, {
    nullable: true
  })
  async findFirstAvailabilitySlotOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAvailabilitySlotOrThrowArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
