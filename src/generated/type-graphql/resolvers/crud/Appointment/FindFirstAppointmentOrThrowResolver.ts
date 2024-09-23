import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAppointmentOrThrowArgs } from "./args/FindFirstAppointmentOrThrowArgs";
import { Appointment } from "../../../models/Appointment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class FindFirstAppointmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => Appointment, {
    nullable: true
  })
  async findFirstAppointmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAppointmentOrThrowArgs): Promise<Appointment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
