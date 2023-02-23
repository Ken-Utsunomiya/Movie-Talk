import { gql } from '@apollo/client'

const FETCH_COMMENT = gql`
  query CommentQuery($id: ID!) {
    comment(id: $id) {
      id
      title
      uid
      createdAt
      content
      replies {
        id
      }
    }
  }
`

export default FETCH_COMMENT
