import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import ReviewType from '../types/review_type'
import Review from '../../models/review'

const editReview = {
  type: ReviewType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: (_: any, { id, title, content }: { id: String, title: String, content: String }) => {
    return Review.editReview(id, title, content)
  },
}

export default editReview
