import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

import CommentType from './comment_type'
import Movie from '../../models/movie'

const MovieType: any = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: GraphQLID },
    movieId: { type: GraphQLInt },
    title: { type: GraphQLString },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parentValue) {
        return Movie.findComments(parentValue.id)
      }
    }
  })
})

export default MovieType
