import mongoose from 'mongoose'

export interface MovieDoc extends mongoose.Document {
  _id: number
  title: string
  comments: any[]
}

export interface MovieModel extends mongoose.Model<MovieDoc> {
  findComments(id: String): any[]
  addComment(id: String, content: String): any[]
}
