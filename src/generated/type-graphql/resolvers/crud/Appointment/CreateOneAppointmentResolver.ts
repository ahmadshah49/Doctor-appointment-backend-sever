import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAppointmentArgs } from "./args/CreateOneAppointmentArgs";
import { Appointment } from "../../../models/Appointment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class CreateOneAppointmentResolver {
  @TypeGraphQL.Mutation(_returns => Appointment, {
    nullable: false
  })
  async createOneAppointment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAppointmentArgs): Promise<Appointment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
