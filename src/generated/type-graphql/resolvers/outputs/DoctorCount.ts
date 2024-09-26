import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorCountAppointmentsArgs } from "./args/DoctorCountAppointmentsArgs";
import { DoctorCountAvailabilitySlotArgs } from "./args/DoctorCountAvailabilitySlotArgs";
import { DoctorCountPatientsArgs } from "./args/DoctorCountPatientsArgs";
import { DoctorCountUnavailabilitySlotArgs } from "./args/DoctorCountUnavailabilitySlotArgs";

@TypeGraphQL.ObjectType("DoctorCount", {})
export class DoctorCount {
  patients!: number;
  appointments!: number;
  AvailabilitySlot!: number;
  UnavailabilitySlot!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "patients",
    nullable: false
  })
  getPatients(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountPatientsArgs): number {
    return root.patients;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "appointments",
    nullable: false
  })
  getAppointments(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountAppointmentsArgs): number {
    return root.appointments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "AvailabilitySlot",
    nullable: false
  })
  getAvailabilitySlot(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountAvailabilitySlotArgs): number {
    return root.AvailabilitySlot;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "UnavailabilitySlot",
    nullable: false
  })
  getUnavailabilitySlot(@TypeGraphQL.Root() root: DoctorCount, @TypeGraphQL.Args() args: DoctorCountUnavailabilitySlotArgs): number {
    return root.UnavailabilitySlot;
  }
}
