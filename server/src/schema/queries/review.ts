import { GraphQLID, GraphQLNonNull } from 'graphql'

import ReviewType from '../types/review_type'
import Review from '../../models/review'

const review = {
  type: ReviewType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve(_: any, { id }: { id: String }) {
    return Review.findById(id)
  }
}

export default review
