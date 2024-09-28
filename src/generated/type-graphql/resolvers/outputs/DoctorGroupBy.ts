import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorAvgAggregate } from "../outputs/DoctorAvgAggregate";
import { DoctorCountAggregate } from "../outputs/DoctorCountAggregate";
import { DoctorMaxAggregate } from "../outputs/DoctorMaxAggregate";
import { DoctorMinAggregate } from "../outputs/DoctorMinAggregate";
import { DoctorSumAggregate } from "../outputs/DoctorSumAggregate";
import { gender } from "../../enums/gender";

@TypeGraphQL.ObjectType("DoctorGroupBy", {})
export class DoctorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePhoto!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  availability!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAvailable!: boolean | null;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MALE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => DoctorCountAggregate, {
    nullable: true
  })
  _count!: DoctorCountAggregate | null;

  @TypeGraphQL.Field(_type => DoctorAvgAggregate, {
    nullable: true
  })
  _avg!: DoctorAvgAggregate | null;

  @TypeGraphQL.Field(_type => DoctorSumAggregate, {
    nullable: true
  })
  _sum!: DoctorSumAggregate | null;

  @TypeGraphQL.Field(_type => DoctorMinAggregate, {
    nullable: true
  })
  _min!: DoctorMinAggregate | null;

  @TypeGraphQL.Field(_type => DoctorMaxAggregate, {
    nullable: true
  })
  _max!: DoctorMaxAggregate | null;
}
