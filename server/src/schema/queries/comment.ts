import { GraphQLID, GraphQLNonNull } from 'graphql'

import CommentType from '../types/comment_type'
import Comment from '../../models/comment'

const comment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { id }: { id: String }) {
    return Comment.findById(id)
  }
}

export default comment
