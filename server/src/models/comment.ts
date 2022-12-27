import mongoose from 'mongoose'
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

mongoose.model('comment', CommentSchema)