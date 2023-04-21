import "dotenv/config";
import { ApolloServer } from "apollo-server";
import mongoose, { ConnectOptions } from "mongoose";
import env from "./util/validateEnv";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const port = env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  } as ConnectOptions)
  .then(() => {
    console.log("MongoDB connection successful ");
    return server.listen({ port });
  })
  .then((res) => {
    console.log(`Server running on ${res.url}`);
  });
