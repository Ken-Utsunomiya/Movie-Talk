import { gql } from '@apollo/client'

const FETCH_MOVIES = gql`
  {
    movies {
      id
      movieId
      title
    }
  }
`

export default FETCH_MOVIES
