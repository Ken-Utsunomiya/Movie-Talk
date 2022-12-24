import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title: { type: String },
  createdAt: { type: Date },
  content: { type: String }
})

mongoose.model('comment', CommentSchema)