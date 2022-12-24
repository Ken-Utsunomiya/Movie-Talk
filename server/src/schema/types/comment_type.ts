import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import mongoose from 'mongoose'

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    title: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    content: { type: GraphQLString }
  })
})

export default CommentType
