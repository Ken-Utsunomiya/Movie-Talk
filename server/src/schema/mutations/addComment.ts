import { GraphQLNonNull, GraphQLString } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const addCommentToMovie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, { id, title, content }: { id: String, title: String, content: String }) => {
    return Movie.addCommentToMovie(id, title, content)
  },
}

export default addCommentToMovie
