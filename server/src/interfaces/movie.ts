import mongoose from 'mongoose'
import { CommentDoc } from './comment'

export interface MovieDoc extends mongoose.Document {
  movieId: number
  title: String
  comments: CommentDoc[]
}

export interface MovieModel extends mongoose.Model<MovieDoc> {
  findComments(id: String): CommentDoc[]
  addCommentToMovie(id: String, title: String, content: String): CommentDoc[]
}
