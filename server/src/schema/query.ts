import { GraphQLObjectType } from 'graphql'

import movie from './queries/movie'
import movies from './queries/movies'

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    movie,
    movies
  })
})

export default query
