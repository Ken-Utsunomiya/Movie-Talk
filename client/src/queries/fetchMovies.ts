import { gql } from '@apollo/client'

const FETCH_MOVIES = gql`
  {
    movies {
      id
      title
    }
  }
`

export default FETCH_MOVIES
