import "reflect-metadata";

import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { AuthResolver } from "./resolvers/mutations/Auth";
import { buildSchemaSync } from "type-graphql";
import { MinimalQueryResolver } from "./resolvers/querys/DummyQuery";
import { createContext } from "./context/Context";
import { ExampleResolver } from "./resolvers/mutations/Example";
const index = async () => {
  const schema = buildSchemaSync({
    resolvers: [AuthResolver, MinimalQueryResolver, ExampleResolver],

    validate: false,
  });

  const yoga = createYoga({
    schema,
    context: (req: any) => createContext(req),
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
};
index();
