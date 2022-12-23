import { GraphQLID, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const movie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { id }: any) {
    return Movie.findById(id)
  }
}

export default movie
