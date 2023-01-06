import { gql } from '@apollo/client'

const FETCH_MOVIE = gql`
  query MovieQuery($id: ID!) {
    movie(id: $id) {
      id
      movieId
      title
      comments {
        id
        title
        createdAt
        content
        replies {
          id
          createdAt
          content
          likes
        }
      }
    }
  }
`

export default FETCH_MOVIE
