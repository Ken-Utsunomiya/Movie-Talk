import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import Reply from '../../models/reply'
import ReplyType from '../types/reply_type'

const editReply = {
  type: ReplyType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    content: { type: GraphQLString }
  },
  resolve: (_: any, { id, content }: { id: String, content: String }) => {
    return Reply.editReply(id, content)
  },
}

export default editReply
