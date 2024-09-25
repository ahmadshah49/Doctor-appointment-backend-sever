import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAvailabilitySlotArgs } from "./args/CreateManyAndReturnAvailabilitySlotArgs";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { CreateManyAndReturnAvailabilitySlot } from "../../outputs/CreateManyAndReturnAvailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class CreateManyAndReturnAvailabilitySlotResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAvailabilitySlot], {
    nullable: false
  })
  async createManyAndReturnAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAvailabilitySlotArgs): Promise<CreateManyAndReturnAvailabilitySlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
