import { GraphQLID, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import CommentType from '../types/comment_type'

const Comment = mongoose.model('comment')

const comment = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { id }: any) {
    return Comment.findById(id)
  }
}

export default comment
