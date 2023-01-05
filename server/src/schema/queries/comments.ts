import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import CommentType from '../types/comment_type'
import Comment from '../../models/comment'

const comments = {
  type: new GraphQLList(CommentType),
  args: {
    movie_id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { movie_id }: { movie_id: string }) {
    return Comment.find({ movie: new mongoose.Types.ObjectId(movie_id) })
  }
}

export default comments
