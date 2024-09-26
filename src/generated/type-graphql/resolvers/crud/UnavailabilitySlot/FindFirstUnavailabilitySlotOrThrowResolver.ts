import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUnavailabilitySlotOrThrowArgs } from "./args/FindFirstUnavailabilitySlotOrThrowArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class FindFirstUnavailabilitySlotOrThrowResolver {
  @TypeGraphQL.Query(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async findFirstUnavailabilitySlotOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUnavailabilitySlotOrThrowArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
