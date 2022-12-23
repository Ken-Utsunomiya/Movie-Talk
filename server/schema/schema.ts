import { GraphQLSchema } from 'graphql'

import RootQuery from './types/root_query_type'

const schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery
})

export default schema
