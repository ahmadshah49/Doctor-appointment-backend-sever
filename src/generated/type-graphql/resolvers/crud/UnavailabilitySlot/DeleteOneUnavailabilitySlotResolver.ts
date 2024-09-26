import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUnavailabilitySlotArgs } from "./args/DeleteOneUnavailabilitySlotArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class DeleteOneUnavailabilitySlotResolver {
  @TypeGraphQL.Mutation(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async deleteOneUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUnavailabilitySlotArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
