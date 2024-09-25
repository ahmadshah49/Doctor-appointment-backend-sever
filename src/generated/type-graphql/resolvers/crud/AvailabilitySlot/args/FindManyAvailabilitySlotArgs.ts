import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AvailabilitySlotOrderByWithRelationInput } from "../../../inputs/AvailabilitySlotOrderByWithRelationInput";
import { AvailabilitySlotWhereInput } from "../../../inputs/AvailabilitySlotWhereInput";
import { AvailabilitySlotWhereUniqueInput } from "../../../inputs/AvailabilitySlotWhereUniqueInput";
import { AvailabilitySlotScalarFieldEnum } from "../../../../enums/AvailabilitySlotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAvailabilitySlotArgs {
  @TypeGraphQL.Field(_type => AvailabilitySlotWhereInput, {
    nullable: true
  })
  where?: AvailabilitySlotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AvailabilitySlotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AvailabilitySlotWhereUniqueInput, {
    nullable: true
  })
  cursor?: AvailabilitySlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AvailabilitySlotScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "doctorId" | "day" | "startTime" | "endTime" | "isBooked"> | undefined;
}
