import mongoose from 'mongoose'

import { ReplyDoc, ReplyModel } from '../interfaces/reply'

const Schema = mongoose.Schema

export const ReplySchema = new Schema({
  createdAt: { type: Date },
  content: { type: String },
  likes: { type: Number, default: 0 },
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }
})

ReplySchema.static('like', function(id: String) {
  return Reply.findById(id)
    .then(reply => {
      if (reply) {
        ++reply.likes
        return reply.save()
      }
    })
})

ReplySchema.static('editReply', function(id: String, content: String) {
  return this.findByIdAndUpdate(id, { content }, { new: true })
})

export const Reply: ReplyModel = mongoose.model<ReplyDoc, ReplyModel>('reply', ReplySchema)
export default Reply
