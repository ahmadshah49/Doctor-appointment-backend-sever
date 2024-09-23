import { Resolver, Query } from "type-graphql";

@Resolver()
export class MinimalQueryResolver {
  @Query(() => String)
  async dummyQuery(): Promise<string> {
    return "Dummy Query";
  }
}
