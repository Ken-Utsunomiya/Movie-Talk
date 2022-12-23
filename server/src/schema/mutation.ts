import { GraphQLObjectType } from 'graphql'

import createMovie from './mutations/createMovie'

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createMovie
  })
})

export default mutation
