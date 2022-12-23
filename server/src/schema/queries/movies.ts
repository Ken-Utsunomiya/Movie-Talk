import { GraphQLList } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const movies = {
  type: new GraphQLList(MovieType),
  resolve() {
    return Movie.find({})
  }
}

export default movies
