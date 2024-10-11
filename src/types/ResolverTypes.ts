import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DoctorTypes {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  profilePhoto: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  availability: string;

  @Field()
  email: string;

  @Field()
  isAvailable: boolean;

  @Field()
  gender: string;
}
