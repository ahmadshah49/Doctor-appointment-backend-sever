import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUnavailabilitySlotArgs } from "./args/CreateOneUnavailabilitySlotArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class CreateOneUnavailabilitySlotResolver {
  @TypeGraphQL.Mutation(_returns => UnavailabilitySlot, {
    nullable: false
  })
  async createOneUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUnavailabilitySlotArgs): Promise<UnavailabilitySlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
