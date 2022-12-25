import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  id: { type: Number },
  title: { type: String }
})

mongoose.model('movie', MovieSchema)
