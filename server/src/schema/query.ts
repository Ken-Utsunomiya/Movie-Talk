import { GraphQLObjectType } from 'graphql'

import movie from './queries/movie'
import movies from './queries/movies'
import comment from './queries/comment'
import comments from './queries/comments'
import reply from './queries/reply'
import replies from './queries/replies'
import review from './queries/review'
import reviews from './queries/reviews'

const query = new GraphQLObjectType({
  name: 'query',
  fields: () => ({
    movie,
    movies,
    comment,
    comments,
    reply,
    replies,
    review,
    reviews
  })
})

export default query
