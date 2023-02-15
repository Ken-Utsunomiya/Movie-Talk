import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($id: ID!) {
    movie(id: $id) {
      id
      movieId
      title
      commentCount
      comments {
        id
        title
        uid
        createdAt
        content
        replies {
          id
          createdAt
          uid
          content
          likes
        }
      }
    }
  }
`

export default FETCH_MOVIE
