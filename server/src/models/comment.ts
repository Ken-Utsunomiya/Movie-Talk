import mongoose from 'mongoose'

import { CommentDoc, CommentModel } from '../interfaces/comment'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title: { type: String },
  createdAt: { type: Date },
  content: { type: String },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'movie'
  }
})

export const Comment: CommentModel = mongoose.model<CommentDoc, CommentModel>('comment', CommentSchema)
export default Comment
