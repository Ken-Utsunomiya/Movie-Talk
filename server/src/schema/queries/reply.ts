import { GraphQLNonNull, GraphQLString } from 'graphql'
import Reply from '../../models/reply'

import ReplyType from '../types/reply_type'

const reply = {
  type: ReplyType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(_: any, { id }: { id: String }) {
    return Reply.findById(id)
  }
}

export default reply