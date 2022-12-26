import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  _id: { type: Number },
  title: { type: String }
})

mongoose.model('movie', MovieSchema)
