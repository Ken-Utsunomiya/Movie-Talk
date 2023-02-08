import { GraphQLObjectType } from 'graphql'

import createMovie from './mutations/createMovie'
import addCommentToMovie from './mutations/addComment'
import addReplyToComment from './mutations/addReply'
import addReviewtoMovie from './mutations/addReview'
import editComment from './mutations/editComment'
import likeReply from './mutations/likeReply'
import deleteComment from './mutations/deleteComment'
import editReply from './mutations/editReply'
import deleteReply from './mutations/deleteReply'
import editReview from './mutations/editReview'
import deleteReview from './mutations/deleteReview'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMovie,
    addCommentToMovie,
    addReplyToComment,
    addReviewtoMovie,
    editComment,
    likeReply,
    deleteComment,
    editReply,
    deleteReply,
    editReview,
    deleteReview
  })
})

export default mutation
