import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';


const allTypes = loadFilesSync(`${__dirname}/api/**/*.gql`);
const allResolvers = loadFilesSync(`${__dirname}/api/**/*.js`);
const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(allTypes),
  resolvers: mergeResolvers(allResolvers),
})

export default schema;