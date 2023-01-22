import { PrismaClient } from '@prisma/client';
import { createServer } from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import { json } from 'body-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import schema from './schema';


const prisma = new PrismaClient();

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
const httpServer = createServer(app);

const startApolloServer = async () => {
  const apolloServer = new ApolloServer({
    schema,
  })

  await apolloServer.start();

  app.use(
    cors(),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }) => ({ req, prisma }),
    }),
  );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at ${PORT}/graphql`);
}

startApolloServer();
