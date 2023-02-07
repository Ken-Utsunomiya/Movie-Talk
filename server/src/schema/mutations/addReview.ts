import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import Movie from '../../models/movie'
import ReviewType from '../types/review_type'

const addReviewToMovie = {
  type: ReviewType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)},
    title: { type: new GraphQLNonNull(GraphQLString)},
    content: { type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (_: any, { id, title, content }: { id: String, title: String, content: String }) => {
    return Movie.addReviewToMovie(id, title, content)
  }
}

export default addReviewToMovie
