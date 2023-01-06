import { GraphQLID, GraphQLNonNull } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const movie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { id }: { id: String }) {
    return Movie.findById(id)
  }
}

export default movie
