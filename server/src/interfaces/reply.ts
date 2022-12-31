import mongoose from 'mongoose'
import { CommentDoc } from './comment'

export interface ReplyDoc extends mongoose.Document {
  content: String
  likes: number
  comment: CommentDoc
}

export interface ReplyModel extends mongoose.Model<ReplyDoc> {
  like(id: String): ReplyDoc
}
