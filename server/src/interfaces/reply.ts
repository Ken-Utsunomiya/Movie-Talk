import mongoose from 'mongoose'
import { CommentDoc } from './comment'

export interface ReplyDoc extends mongoose.Document {
  content: String
  comment: CommentDoc
}

export interface ReplyModel extends mongoose.Model<ReplyDoc> {
  like(): void
}
