import { GraphQLObjectType } from 'graphql'

import createMovie from './mutations/createMovie'
import addCommentToMovie from './mutations/addComment'
import addReplyToComment from './mutations/addReply'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMovie,
    addCommentToMovie,
    addReplyToComment
  })
})

export default mutation
