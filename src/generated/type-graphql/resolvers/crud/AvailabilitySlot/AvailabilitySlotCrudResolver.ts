import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAvailabilitySlotArgs } from "./args/AggregateAvailabilitySlotArgs";
import { CreateManyAndReturnAvailabilitySlotArgs } from "./args/CreateManyAndReturnAvailabilitySlotArgs";
import { CreateManyAvailabilitySlotArgs } from "./args/CreateManyAvailabilitySlotArgs";
import { CreateOneAvailabilitySlotArgs } from "./args/CreateOneAvailabilitySlotArgs";
import { DeleteManyAvailabilitySlotArgs } from "./args/DeleteManyAvailabilitySlotArgs";
import { DeleteOneAvailabilitySlotArgs } from "./args/DeleteOneAvailabilitySlotArgs";
import { FindFirstAvailabilitySlotArgs } from "./args/FindFirstAvailabilitySlotArgs";
import { FindFirstAvailabilitySlotOrThrowArgs } from "./args/FindFirstAvailabilitySlotOrThrowArgs";
import { FindManyAvailabilitySlotArgs } from "./args/FindManyAvailabilitySlotArgs";
import { FindUniqueAvailabilitySlotArgs } from "./args/FindUniqueAvailabilitySlotArgs";
import { FindUniqueAvailabilitySlotOrThrowArgs } from "./args/FindUniqueAvailabilitySlotOrThrowArgs";
import { GroupByAvailabilitySlotArgs } from "./args/GroupByAvailabilitySlotArgs";
import { UpdateManyAvailabilitySlotArgs } from "./args/UpdateManyAvailabilitySlotArgs";
import { UpdateOneAvailabilitySlotArgs } from "./args/UpdateOneAvailabilitySlotArgs";
import { UpsertOneAvailabilitySlotArgs } from "./args/UpsertOneAvailabilitySlotArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AvailabilitySlot } from "../../../models/AvailabilitySlot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAvailabilitySlot } from "../../outputs/AggregateAvailabilitySlot";
import { AvailabilitySlotGroupBy } from "../../outputs/AvailabilitySlotGroupBy";
import { CreateManyAndReturnAvailabilitySlot } from "../../outputs/CreateManyAndReturnAvailabilitySlot";

@TypeGraphQL.Resolver(_of => AvailabilitySlot)
export class AvailabilitySlotCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAvailabilitySlot, {
    nullable: false
  })
  async aggregateAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAvailabilitySlotArgs): Promise<AggregateAvailabilitySlot> {
    return getPrismaFromContext(ctx).availabilitySlot.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAvailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAvailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AvailabilitySlot, {
    nullable: true
  })
  async deleteOneAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAvailabilitySlotArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AvailabilitySlot, {
    nullable: true
  })
  async findFirstAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAvailabilitySlotArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AvailabilitySlot, {
    nullable: true
  })
  async findFirstAvailabilitySlotOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAvailabilitySlotOrThrowArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AvailabilitySlot], {
    nullable: false
  })
  async availabilitySlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAvailabilitySlotArgs): Promise<AvailabilitySlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [AvailabilitySlotGroupBy], {
    nullable: false
  })
  async groupByAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAvailabilitySlotArgs): Promise<AvailabilitySlotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAvailabilitySlotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AvailabilitySlot, {
    nullable: true
  })
  async updateOneAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAvailabilitySlotArgs): Promise<AvailabilitySlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AvailabilitySlot, {
    nullable: false
  })
  async upsertOneAvailabilitySlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAvailabilitySlotArgs): Promise<AvailabilitySlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).availabilitySlot.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
