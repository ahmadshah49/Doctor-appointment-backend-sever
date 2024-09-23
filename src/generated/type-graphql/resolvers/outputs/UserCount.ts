import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAppointmentArgs } from "./args/UserCountAppointmentArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  appointment!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "appointment",
    nullable: false
  })
  getAppointment(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountAppointmentArgs): number {
    return root.appointment;
  }
}
