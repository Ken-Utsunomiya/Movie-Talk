import mongoose from 'mongoose'

import { CommentDoc } from './comment'

export interface ReplyDoc extends mongoose.Document {
  uid: String
  content: String
  likes: number
  comment: CommentDoc
}

export interface ReplyModel extends mongoose.Model<ReplyDoc> {
  like(id: String): ReplyDoc
  editReply(id: String, content: String): ReplyDoc
  deleteReply(id: String): ReplyDoc
}
