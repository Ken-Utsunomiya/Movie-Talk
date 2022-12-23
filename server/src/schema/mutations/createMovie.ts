import { GraphQLNonNull, GraphQLString } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const createMovie = {
  type: MovieType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_: any, { title }: any) => {
    return (new Movie({ title })).save()
  },
}

export default createMovie
