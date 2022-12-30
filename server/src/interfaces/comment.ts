import mongoose from 'mongoose'
import { MovieDoc } from './movie'
import { ReplyDoc } from './reply'

export interface CommentDoc extends mongoose.Document {
  id: String
  title: String
  movie: MovieDoc
  replies: ReplyDoc[]
}

export interface CommentModel extends mongoose.Model<CommentDoc> {
  findReplies(id: String): ReplyDoc[],
  addReplyToComment(id: String, content: String): ReplyDoc[]
}
