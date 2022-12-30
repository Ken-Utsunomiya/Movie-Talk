import { GraphQLObjectType } from 'graphql'

import createMovie from './mutations/createMovie'
import addCommentToMovie from './mutations/addComment'
import addReplyToComment from './mutations/addReply'
import editComment from './mutations/editComment'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMovie,
    addCommentToMovie,
    addReplyToComment,
    editComment
  })
})

export default mutation
