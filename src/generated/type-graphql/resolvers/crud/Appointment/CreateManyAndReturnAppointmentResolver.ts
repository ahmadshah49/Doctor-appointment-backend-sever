import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAppointmentArgs } from "./args/CreateManyAndReturnAppointmentArgs";
import { Appointment } from "../../../models/Appointment";
import { CreateManyAndReturnAppointment } from "../../outputs/CreateManyAndReturnAppointment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class CreateManyAndReturnAppointmentResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAppointment], {
    nullable: false
  })
  async createManyAndReturnAppointment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnAppointmentArgs): Promise<CreateManyAndReturnAppointment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
