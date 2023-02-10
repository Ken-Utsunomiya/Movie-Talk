import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

import MovieType from './movie_type'
import formatDate from '../../utils/dateFormat'
import Comment from '../../models/comment'
import ReplyType from './reply_type'

const CommentType: any = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: { type: GraphQLID },
    uid: { type: GraphQLString },
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
        return Comment.findById(parentValue)
          .populate('movie')
          .then(comment => comment?.movie)}
    },
    replies: {
      type: new GraphQLList(ReplyType),
      resolve(parentValue) {
        return Comment.findReplies(parentValue.id)
      }
    }
  })
})

export default CommentType
