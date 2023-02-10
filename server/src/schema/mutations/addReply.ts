import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import CommentType from '../types/comment_type'
import Comment from '../../models/comment'

const addReplyToComment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    uid: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_: any, { id, uid, content }: { id: String, uid: String, content: String }) => {
    return Comment.addReplyToComment(id, uid, content)
  },
}

export default addReplyToComment
