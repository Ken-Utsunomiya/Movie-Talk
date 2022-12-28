import mongoose from 'mongoose'
import { MovieDoc } from './movie'

export interface CommentDoc extends mongoose.Document {
  id: String
  title: string
  movie: MovieDoc
}

export interface CommentModel extends mongoose.Model<CommentDoc> {
  findReplies(id: String): any[]
}