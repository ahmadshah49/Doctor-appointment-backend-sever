import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppointmentWhereInput } from "../inputs/AppointmentWhereInput";

@TypeGraphQL.InputType("AppointmentListRelationFilter", {})
export class AppointmentListRelationFilter {
  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  every?: AppointmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  some?: AppointmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppointmentWhereInput, {
    nullable: true
  })
  none?: AppointmentWhereInput | undefined;
}
