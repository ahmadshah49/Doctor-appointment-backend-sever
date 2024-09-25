import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPatientDoctorArgs } from "./args/CreateManyAndReturnPatientDoctorArgs";
import { Doctor } from "../../models/Doctor";
import { User } from "../../models/User";
import { gender } from "../../enums/gender";

@TypeGraphQL.ObjectType("CreateManyAndReturnPatient", {})
export class CreateManyAndReturnPatient {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullName!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "MAlE" | "FEMALE" | "OTHERS";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profilePicture!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phoneNo!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  doctorId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  User!: User;

  Doctor!: Doctor | null;

  @TypeGraphQL.Field(_type => Doctor, {
    name: "Doctor",
    nullable: true
  })
  getDoctor(@TypeGraphQL.Root() root: CreateManyAndReturnPatient, @TypeGraphQL.Args() args: CreateManyAndReturnPatientDoctorArgs): Doctor | null {
    return root.Doctor;
  }
}
