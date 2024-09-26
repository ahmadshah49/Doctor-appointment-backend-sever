import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUnavailabilitySlotArgs } from "./args/AggregateUnavailabilitySlotArgs";
import { CreateManyAndReturnUnavailabilitySlotArgs } from "./args/CreateManyAndReturnUnavailabilitySlotArgs";
import { CreateManyUnavailabilitySlotArgs } from "./args/CreateManyUnavailabilitySlotArgs";
import { CreateOneUnavailabilitySlotArgs } from "./args/CreateOneUnavailabilitySlotArgs";
import { DeleteManyUnavailabilitySlotArgs } from "./args/DeleteManyUnavailabilitySlotArgs";
import { DeleteOneUnavailabilitySlotArgs } from "./args/DeleteOneUnavailabilitySlotArgs";
import { FindFirstUnavailabilitySlotArgs } from "./args/FindFirstUnavailabilitySlotArgs";
import { FindFirstUnavailabilitySlotOrThrowArgs } from "./args/FindFirstUnavailabilitySlotOrThrowArgs";
import { FindManyUnavailabilitySlotArgs } from "./args/FindManyUnavailabilitySlotArgs";
import { FindUniqueUnavailabilitySlotArgs } from "./args/FindUniqueUnavailabilitySlotArgs";
import { FindUniqueUnavailabilitySlotOrThrowArgs } from "./args/FindUniqueUnavailabilitySlotOrThrowArgs";
import { GroupByUnavailabilitySlotArgs } from "./args/GroupByUnavailabilitySlotArgs";
import { UpdateManyUnavailabilitySlotArgs } from "./args/UpdateManyUnavailabilitySlotArgs";
import { UpdateOneUnavailabilitySlotArgs } from "./args/UpdateOneUnavailabilitySlotArgs";
import { UpsertOneUnavailabilitySlotArgs } from "./args/UpsertOneUnavailabilitySlotArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UnavailabilitySlot } from "../../../models/UnavailabilitySlot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUnavailabilitySlot } from "../../outputs/AggregateUnavailabilitySlot";
import { CreateManyAndReturnUnavailabilitySlot } from "../../outputs/CreateManyAndReturnUnavailabilitySlot";
import { UnavailabilitySlotGroupBy } from "../../outputs/UnavailabilitySlotGroupBy";

@TypeGraphQL.Resolver(_of => UnavailabilitySlot)
export class UnavailabilitySlotCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUnavailabilitySlot, {
    nullable: false
  })
  async aggregateUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUnavailabilitySlotArgs): Promise<AggregateUnavailabilitySlot> {
    return getPrismaFromContext(ctx).unavailabilitySlot.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUnavailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUnavailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async findFirstUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUnavailabilitySlotArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async findFirstUnavailabilitySlotOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUnavailabilitySlotOrThrowArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UnavailabilitySlot], {
    nullable: false
  })
  async unavailabilitySlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUnavailabilitySlotArgs): Promise<UnavailabilitySlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async unavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUnavailabilitySlotArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [UnavailabilitySlotGroupBy], {
    nullable: false
  })
  async groupByUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUnavailabilitySlotArgs): Promise<UnavailabilitySlotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUnavailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UnavailabilitySlot, {
    nullable: true
  })
  async updateOneUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUnavailabilitySlotArgs): Promise<UnavailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UnavailabilitySlot, {
    nullable: false
  })
  async upsertOneUnavailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUnavailabilitySlotArgs): Promise<UnavailabilitySlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).unavailabilitySlot.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
