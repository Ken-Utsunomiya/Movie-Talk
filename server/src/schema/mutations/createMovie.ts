import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const createMovie = {
  type: MovieType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (_: any, { _id, title }: any) => {
    return (new Movie({ _id, title })).save()
  },
}

export default createMovie
