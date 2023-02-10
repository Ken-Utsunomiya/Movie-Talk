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

CommentSchema.static('findReplies', function(id: String) {
  return this.findById(id)
    .populate('replies')
    .then((comment: CommentDoc) => comment.replies)
})

CommentSchema.static('addReplyToComment', function(id: String, uid: String, content: String) {
  return this.findById(id)
    .then((comment: CommentDoc) => {
      const createdAt = Date.now()
      const likes = 0
      const reply = new Reply({ uid, content, createdAt, likes, comment })
      comment.replies.push(reply)
      return Promise.all([reply.save(), comment.save()])
        .then(([_, comment]) => comment)
    })
})

CommentSchema.static('editComment', function(id: String, title: String, content: String) {
  return this.findByIdAndUpdate(id, { title, content }, { new: true })
})

CommentSchema.static('deleteComment', function(id: String) {
  return this.findByIdAndDelete(id)
})

export const Comment: CommentModel = mongoose.model<CommentDoc, CommentModel>('comment', CommentSchema)
export default Comment
