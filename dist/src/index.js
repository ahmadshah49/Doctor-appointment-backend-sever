"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const graphql_yoga_1 = require("graphql-yoga");
const http_1 = require("http");
const Auth_1 = require("./resolvers/mutations/Auth");
const type_graphql_1 = require("type-graphql");
const DummyQuery_1 = require("./resolvers/querys/DummyQuery");
const Context_1 = require("./context/Context");
const Example_1 = require("./resolvers/mutations/Example");
const Patient_1 = require("./resolvers/mutations/Patient");
const Doctor_1 = require("./resolvers/mutations/Doctor");
const index = async () => {
    const schema = (0, type_graphql_1.buildSchemaSync)({
        resolvers: [
            Auth_1.AuthResolver,
            DummyQuery_1.MinimalQueryResolver,
            Example_1.ExampleResolver,
            Patient_1.PatientResolver,
            Doctor_1.DoctorResolver,
        ],
        validate: false,
    });
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema,
        context: (req) => (0, Context_1.createContext)(req),
    });
    const server = (0, http_1.createServer)(yoga);
    server.listen(4000, () => {
        console.info("Server is running on http://localhost:4000/graphql");
    });
};
index();
