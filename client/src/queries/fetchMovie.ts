import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($movieId: number!) {
    movie(movieId: $movieId) {
      movieId
      title
    }
  }
`

export default FETCH_MOVIE
