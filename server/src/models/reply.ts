import mongoose from 'mongoose'

import { ReplyDoc, ReplyModel } from '../interfaces/reply'

const Schema = mongoose.Schema

export const ReplySchema = new Schema({
  uid: { type: String },
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

ReplySchema.static('deleteReply', function(id: String) {
  return this.findByIdAndDelete(id)
})

export const Reply: ReplyModel = mongoose.model<ReplyDoc, ReplyModel>('reply', ReplySchema)
export default Reply
