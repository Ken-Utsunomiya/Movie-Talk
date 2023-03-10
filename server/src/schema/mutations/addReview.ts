import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import Movie from '../../models/movie'
import MovieType from '../types/movie_type'

const addReviewToMovie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)},
    title: { type: new GraphQLNonNull(GraphQLString)},
    uid: { type: new GraphQLNonNull(GraphQLString)},
    content: { type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: (_: any, { id, title, uid, content }: { id: String, title: String, uid: String, content: String }) => {
    return Movie.addReviewToMovie(id, title, uid, content)
  }
}

export default addReviewToMovie
