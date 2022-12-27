import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import mongoose from 'mongoose'

import MovieType from './movie_type'
import formatDate from '../../utils/dateFormat'

const Comment = mongoose.model('comment')

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(parentValue) {
        return formatDate(new Date(parentValue.createdAt))
      }
    },
    movie: {
      type: MovieType,
      resolve(parentValue) {
        return Comment.findById(parentValue).populate('movie')
          .then(comment => comment.movie)}
    }
  })
})

export default CommentType
