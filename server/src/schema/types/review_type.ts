import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

import MovieType from './movie_type'
import formatDate from '../../utils/dateFormat'
import Review from '../../models/review'

const ReviewType: any = new GraphQLObjectType({
  name: 'ReviewType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(parentValue) {
        return formatDate(new Date(parentValue.createdAt))
      }
    },
    movie: {
      type: MovieType,
      resolve(parentValue) {
        return Review.findById(parentValue)
          .populate('movie')
          .then(review => review?.movie)}
    }
  })
})

export default ReviewType
