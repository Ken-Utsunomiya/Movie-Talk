import mongoose from 'mongoose'

export interface CommentDoc extends mongoose.Document {
  _id: number
  title: string
  comments: any[]
}

export interface CommentModel extends mongoose.Model<CommentDoc> {
  findReplies(id: String): any[]
}
