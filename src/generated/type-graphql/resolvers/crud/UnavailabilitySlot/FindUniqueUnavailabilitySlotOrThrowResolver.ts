import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUnavailabilitySlotOrThrowArgs } from "./args/FindUniqueUnavailabilitySlotOrThrowArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class FindUniqueUnavailabilitySlotOrThrowResolver {
  @TypeGraphQL.Query(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async getUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUnavailabilitySlotOrThrowArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
