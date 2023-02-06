import mongoose from 'mongoose'

import { CommentDoc } from './comment'
import { ReviewDoc } from './review'

export interface MovieDoc extends mongoose.Document {
  movieId: number
  title: String
  comments: CommentDoc[]
  reviews: ReviewDoc[]
}

export interface MovieModel extends mongoose.Model<MovieDoc> {
  findComments(id: String): CommentDoc[]
  addCommentToMovie(id: String, title: String, content: String): CommentDoc[]
  addReviewToMovie(id: String, title: String, content: String): ReviewDoc[]
}
