import { GraphQLObjectType } from 'graphql'

import movie from './queries/movie'
import movies from './queries/movies'
import comment from './queries/comment'

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    movie,
    movies,
    comment
  })
})

export default query
