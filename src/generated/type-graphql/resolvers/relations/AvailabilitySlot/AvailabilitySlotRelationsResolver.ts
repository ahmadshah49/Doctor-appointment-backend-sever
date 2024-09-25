import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { Doctor } from "../../../models/Doctor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class AvailabilitySlotRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: false
  })
  async doctor(@TypeGraphQL.Root() availabilitySlot: AvailabilitySlot, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findUniqueOrThrow({
      where: {
        id: availabilitySlot.id,
      },
    }).doctor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
