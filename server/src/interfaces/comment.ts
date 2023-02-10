import mongoose from 'mongoose'
import { MovieDoc } from './movie'
import { ReplyDoc } from './reply'

export interface CommentDoc extends mongoose.Document {
  uid: String
  title: String
  content: String
  movie: MovieDoc
  replies: ReplyDoc[]
}

export interface CommentModel extends mongoose.Model<CommentDoc> {
  findReplies(id: String): ReplyDoc[],
  addReplyToComment(id: String, uid: String, content: String): ReplyDoc[]
  editComment(id: String, title: String, content: String): CommentDoc
  deleteComment(id: String): CommentDoc
}
