import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAvailabilitySlotArgs } from "./args/CreateOneAvailabilitySlotArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class CreateOneAvailabilitySlotResolver {
  @TypeGraphQL.Mutation(_returns => AvailabilitySlot, {
    nullable: false
  })
  async createOneAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAvailabilitySlotArgs): Promise<AvailabilitySlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
