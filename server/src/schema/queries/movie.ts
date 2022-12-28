import { GraphQLInt, GraphQLNonNull } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const movie = {
  type: MovieType,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(_: any, { movieId }: any) {
    return Movie.findOne({ movieId: movieId })
  }
}

export default movie
