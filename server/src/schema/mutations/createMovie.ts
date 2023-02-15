import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const createMovie = {
  type: MovieType,
  args: {
    movieId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (_: any, { movieId, title }: { movieId: Number, title: String }) => {
    const commentCount = 0
    return (new Movie({ movieId, title, commentCount })).save()
  },
}

export default createMovie
