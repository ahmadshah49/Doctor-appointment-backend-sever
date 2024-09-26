import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Doctor } from "../../../models/Doctor";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class UnavailabilitySlotRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: false
  })
  async doctor(@TypeGraphQL.Root() unavailabilitySlot: UnavailabilitySlot, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Doctor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findUniqueOrThrow({
      where: {
        id: unavailabilitySlot.id,
      },
    }).doctor({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
