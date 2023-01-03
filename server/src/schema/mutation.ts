import { GraphQLObjectType } from 'graphql'

import createMovie from './mutations/createMovie'
import addCommentToMovie from './mutations/addComment'
import addReplyToComment from './mutations/addReply'
import editComment from './mutations/editComment'
import likeReply from './mutations/likeReply'
import deleteComment from './mutations/deleteComment'
import editReply from './mutations/editReply'
import deleteReply from './mutations/deleteReply'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMovie,
    addCommentToMovie,
    addReplyToComment,
    editComment,
    likeReply,
    deleteComment,
    editReply,
    deleteReply
  })
})

export default mutation
