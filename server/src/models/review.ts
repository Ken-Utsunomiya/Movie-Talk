import mongoose from 'mongoose'

import { ReviewDoc, ReviewModel } from '../interfaces/review'

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  title: { type: String },
  uid: { type: String },
  createdAt: { type: Date },
  content: { type: String },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movie'
  }
})

ReviewSchema.static('editReview', function(id: String, title: String, content: String) {
  return this.findByIdAndUpdate(id, { title, content }, { new: true })
})

ReviewSchema.static('deleteReview', function(id: String) {
  return this.findByIdAndDelete(id)
})

export const Review: ReviewModel = mongoose.model<ReviewDoc, ReviewModel>('review', ReviewSchema)
export default Review
