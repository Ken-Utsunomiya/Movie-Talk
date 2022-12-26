import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($_id: number!) {
    movie(_id: $_id) {
      _id
      title
    }
  }
`

export default FETCH_MOVIE
