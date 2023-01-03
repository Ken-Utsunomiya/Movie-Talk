import { GraphQLID, GraphQLNonNull } from 'graphql'

import ReplyType from '../types/reply_type'
import Reply from '../../models/reply'

const deleteReply = {
  type: ReplyType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (_: any, { id }: { id: String }) => {
    return Reply.deleteReply(id)
  },
}

export default deleteReply
