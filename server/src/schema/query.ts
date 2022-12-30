import { GraphQLObjectType } from 'graphql'

import movie from './queries/movie'
import movies from './queries/movies'
import comment from './queries/comment'
import reply from './queries/reply'

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    movie,
    movies,
    comment,
    reply
  })
})

export default query
