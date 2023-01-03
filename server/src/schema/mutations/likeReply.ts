import { GraphQLID, GraphQLNonNull } from 'graphql'

import Reply from '../../models/reply'
import ReplyType from '../types/reply_type'

const likeReply = {
  type: ReplyType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) }},
  resolve(_: any, { id }: { id: String }) {
    return Reply.like(id)
  }
}

export default likeReply
