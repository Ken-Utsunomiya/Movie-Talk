import { GraphQLSchema } from 'graphql'

import query from './query'

const schema: GraphQLSchema = new GraphQLSchema({
  query
})

export default schema
