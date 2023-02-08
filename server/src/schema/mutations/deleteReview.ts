import { GraphQLID, GraphQLNonNull } from 'graphql'

import ReviewType from '../types/review_type'
import Review from '../../models/review'

const deleteReview = {
  type: ReviewType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: (_: any, { id }: { id: String }) => {
    return Review.deleteReview(id)
  },
}

export default deleteReview
