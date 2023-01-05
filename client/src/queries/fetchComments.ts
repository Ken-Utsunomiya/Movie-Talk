import { gql } from '@apollo/client'

const FETCH_COMMENTS = gql`
  query CommentsQuery($movie_id: ID!) {
    comments(movie_id: $movie_id) {
      id
      title
    }
  }
`

export default FETCH_COMMENTS
