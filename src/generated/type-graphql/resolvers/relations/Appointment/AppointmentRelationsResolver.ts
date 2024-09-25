import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Appointment } from "../../../models/Appointment";
import { Doctor } from "../../../models/Doctor";
import { Patient } from "../../../models/Patient";
import { AppointmentDoctorArgs } from "./args/AppointmentDoctorArgs";
import { AppointmentPatientArgs } from "./args/AppointmentPatientArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Appointment)
export class AppointmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Doctor, {
    nullable: true
  })
  async Doctor(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AppointmentDoctorArgs): Promise<Doctor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findUniqueOrThrow({
      where: {
        id: appointment.id,
      },
    }).Doctor({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Patient, {
    nullable: true
  })
  async Patient(@TypeGraphQL.Root() appointment: Appointment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AppointmentPatientArgs): Promise<Patient | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).appointment.findUniqueOrThrow({
      where: {
        id: appointment.id,
      },
    }).Patient({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
