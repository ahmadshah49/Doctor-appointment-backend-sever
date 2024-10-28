import { Field, ObjectType } from "type-graphql";
import { User } from "../generated/type-graphql";

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

@ObjectType()
export class AuthResponse {
  @Field({ nullable: true })
  accessToken?: string;

  @Field({ nullable: true })
  refreshToken?: string;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  message?: string;
}

// @ObjectType()
// export class AuthResponseForPhoneNo {
//   @Field({ nullable: true })
//   accessToken?: string;

//   @Field({ nullable: true })
//   refreshToken?: string;

//   @Field({ nullable: true })
//   message?: string;

//   @Field(() => User, { nullable: true })
//   user?: User;
// }
