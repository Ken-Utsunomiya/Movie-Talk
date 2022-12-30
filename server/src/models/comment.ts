import mongoose from 'mongoose'

import { CommentDoc, CommentModel } from '../interfaces/comment'
import Reply from './reply'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title: { type: String },
  createdAt: { type: Date },
  content: { type: String },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movie'
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'reply'
  }]
})

CommentSchema.static('addReplyToComment', function(id: String, content: String) {
  return this.findById(id)
    .then((comment: CommentDoc) => {
      const createdAt = Date.now()
      const likes = 0
      const reply = new Reply({ content, createdAt, likes })
      comment.replies.push(reply)
      return Promise.all([reply.save(), comment.save()])
        .then(([_, comment]) => comment)
    })
})

export const Comment: CommentModel = mongoose.model<CommentDoc, CommentModel>('comment', CommentSchema)
export default Comment
