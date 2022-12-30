import { GraphQLNonNull, GraphQLString } from 'graphql'

import CommentType from '../types/comment_type'
import Comment from '../../models/comment'

const editComment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: (_: any, { id, title, content }: { id: String, title: String, content: String }) => {
    return Comment.editComment(id, title, content)
  },
}

export default editComment
