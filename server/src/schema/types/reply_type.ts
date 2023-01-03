import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

import Reply from '../../models/reply'
import formatDate from '../../utils/dateFormat'
import CommentType from './comment_type'

const ReplyType = new GraphQLObjectType({
  name: 'ReplyType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    likes: { type: GraphQLInt },
    createdAt: {
      type: new GraphQLNonNull((GraphQLString)),
      resolve(parentValue) {
        return formatDate(new Date(parentValue.createdAt))
      }
    },
    comment: {
      type: CommentType,
      resolve(parentValue) {
        return Reply.findById(parentValue)
          .populate('comment')
          .then(reply => reply?.comment)}
    }
  })
})

export default ReplyType
