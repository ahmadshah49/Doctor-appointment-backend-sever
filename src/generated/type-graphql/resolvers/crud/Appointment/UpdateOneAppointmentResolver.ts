import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAppointmentArgs } from "./args/UpdateOneAppointmentArgs";
import { Appointment } from "../../../models/Appointment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class UpdateOneAppointmentResolver {
  @TypeGraphQL.Mutation(_returns => Appointment, {
    nullable: true
  })
  async updateOneAppointment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAppointmentArgs): Promise<Appointment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
