import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($id: ID!) {
    movie(id: $id) {
      id
      movieId
      title
    }
  }
`

export default FETCH_MOVIE
