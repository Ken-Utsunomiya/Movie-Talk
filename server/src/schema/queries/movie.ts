import { GraphQLInt, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const movie = {
  type: MovieType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(_: any, { _id }: any) {
    return Movie.findById(_id)
  }
}

export default movie
