import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAvailabilitySlotOrThrowArgs } from "./args/FindUniqueAvailabilitySlotOrThrowArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class FindUniqueAvailabilitySlotOrThrowResolver {
  @TypeGraphQL.Query(_returns => AvailabilitySlot, {
    nullable: true
  })
  async getAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAvailabilitySlotOrThrowArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
