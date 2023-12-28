import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//start up the server
import {typeDefs} from './schema/schema.js';

const server = new ApolloServer({
    //typeDefs --This is where you define your GraphQL schema, specifying the shape of your data graph.
    // This includes the types of data you can fetch, the fields they have, and how they are related.
    typeDefs,

    //resolvers --This is where you define how your schema’s types are fetched from the data graph.
    resolvers,
});

const { url } = await startStandaloneServer( server, {
    listen: {port : 4000}
});

console.log(`Server ready at ${url}`);
