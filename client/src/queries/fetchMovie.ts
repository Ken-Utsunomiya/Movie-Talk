import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($id: Int!) {
    movie(_id: $id) {
      title
    }
  }
`

export default FETCH_MOVIE
