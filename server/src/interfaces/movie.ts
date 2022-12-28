import mongoose from 'mongoose'

export interface MovieDoc extends mongoose.Document {
  movieId: number
  title: String
  comments: any[]
}

export interface MovieModel extends mongoose.Model<MovieDoc> {
  findComments(id: String): any[]
  addCommentToMovie(id: String, title: String, content: String): any[]
}
