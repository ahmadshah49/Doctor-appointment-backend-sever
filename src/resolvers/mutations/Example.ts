import { Resolver, Query, UseMiddleware } from "type-graphql";
import { isAuth, isDoctor } from "../../middleware/MiddleWare";

@Resolver()
export class ExampleResolver {
  @Query(() => String)
  @UseMiddleware(isAuth, isDoctor) // Apply middleware
  async securedQuery(): Promise<string> {
    return "This data is secure";
  }
}
@Resolver()
export class OnlyAdmin {
  @Query(() => String)
  @UseMiddleware(isAuth, isDoctor) // Apply middleware
  async forDoctor(): Promise<string> {
    return "This is just for doctors";
  }
}
