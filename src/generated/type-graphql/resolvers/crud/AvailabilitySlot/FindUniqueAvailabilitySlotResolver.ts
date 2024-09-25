import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAvailabilitySlotArgs } from "./args/FindUniqueAvailabilitySlotArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class FindUniqueAvailabilitySlotResolver {
  @TypeGraphQL.Query(_returns => AvailabilitySlot, {
    nullable: true
  })
  async availabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAvailabilitySlotArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
