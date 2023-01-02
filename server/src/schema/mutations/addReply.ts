import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import CommentType from '../types/comment_type'
import Comment from '../../models/comment'

const addReplyToComment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, { id, content }: { id: String, content: String }) => {
    return Comment.addReplyToComment(id, content)
  },
}

export default addReplyToComment
