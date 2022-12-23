import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString }
  })
})

export default MovieType
