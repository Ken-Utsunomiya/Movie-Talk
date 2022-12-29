import { GraphQLList } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const movies = {
  type: new GraphQLList(MovieType),
  resolve() {
    return Movie.find({})
  }
}

export default movies
