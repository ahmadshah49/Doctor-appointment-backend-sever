import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUnavailabilitySlotArgs } from "./args/CreateManyAndReturnUnavailabilitySlotArgs";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { CreateManyAndReturnUnavailabilitySlot } from "../../outputs/CreateManyAndReturnUnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class CreateManyAndReturnUnavailabilitySlotResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUnavailabilitySlot], {
    nullable: false
  })
  async createManyAndReturnUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUnavailabilitySlotArgs): Promise<CreateManyAndReturnUnavailabilitySlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
