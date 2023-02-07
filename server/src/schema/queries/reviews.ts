import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import mongoose from 'mongoose'

import ReviewType from '../types/review_type'
import Review from '../../models/review'

const reviews = {
  type: new GraphQLList(ReviewType),
  args: {
    movie_id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { movie_id }: { movie_id: string }) {
    return Review.find({ movie: new mongoose.Types.ObjectId(movie_id) })
  }
}

export default reviews
