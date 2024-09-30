import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnavailabilitySlotOrderByWithRelationInput } from "../../../inputs/UnavailabilitySlotOrderByWithRelationInput";
import { UnavailabilitySlotWhereInput } from "../../../inputs/UnavailabilitySlotWhereInput";
import { UnavailabilitySlotWhereUniqueInput } from "../../../inputs/UnavailabilitySlotWhereUniqueInput";
import { UnavailabilitySlotScalarFieldEnum } from "../../../../enums/UnavailabilitySlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUnavailabilitySlotArgs {
  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereInput, {
    nullable: true
  })
  where?: UnavailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UnavailabilitySlotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UnavailabilitySlotWhereUniqueInput, {
    nullable: true
  })
  cursor?: UnavailabilitySlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UnavailabilitySlotScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "doctorId" | "startTime" | "endTime" | "startDate" | "endDate" | "reason" | "isAvailable"> | undefined;
}
