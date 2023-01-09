import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import ReplyType from '../types/reply_type'
import Reply from '../../models/reply'

const replies = {
  type: new GraphQLList(ReplyType),
  args: {
    comment_id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { comment_id }: { comment_id: string }) {
    return Reply.find({ comment: new mongoose.Types.ObjectId(comment_id) })
  }
}

export default replies
