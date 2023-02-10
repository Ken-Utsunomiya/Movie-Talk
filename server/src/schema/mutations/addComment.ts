import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import MovieType from '../types/movie_type'
import Movie from '../../models/movie'

const addCommentToMovie = {
  type: MovieType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, { id, title, uid, content }: { id: String, title: String, uid: String, content: String }) => {
    return Movie.addCommentToMovie(id, title, uid, content)
  },
}

export default addCommentToMovie
