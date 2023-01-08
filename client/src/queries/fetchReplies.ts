import { gql } from '@apollo/client'

const FETCH_REPLIES = gql`
  query RepliesQuery($comment_id: ID!) {
    replies(comment_id: $comment_id) {
      id
      createdAt
      content
    }
  }
`

export default FETCH_REPLIES
