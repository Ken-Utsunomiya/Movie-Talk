import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import mongoose from 'mongoose'

import MovieType from '../types/movie_type'

const Movie = mongoose.model('movie')

const createMovie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (_: any, { id, title }: any) => {
    return (new Movie({ id, title })).save()
  },
}

export default createMovie
