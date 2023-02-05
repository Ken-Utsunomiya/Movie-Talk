import mongoose from 'mongoose'
import { MovieDoc } from './movie'

export interface ReviewDoc extends mongoose.Document {
  title: String
  uid: String
  content: String
  movie: MovieDoc
}

export interface ReviewModel extends mongoose.Model<ReviewDoc> {
  editReview(id: String, title: String, content: String): ReviewDoc
  deleteReview(id: String): ReviewDoc
}
