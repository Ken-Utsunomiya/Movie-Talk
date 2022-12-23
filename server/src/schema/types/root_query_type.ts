import { GraphQLList, GraphQLObjectType } from 'graphql'
import mongoose from 'mongoose'

import MovieType from './movie_type'

const Movie = mongoose.model('movie')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({})
      }
    },
    movie: {
      type: MovieType,
      resolve(_, { id }) {
        return Movie.findById(id)
      }
    }
  })
})

export default RootQuery
