import { gql } from '@apollo/client'

const ADD_COMMENT = gql`
  mutation AddComment($title: String){
    addComment(title: $title) {
      title,
      uid,
      content,
      createdAt,
      movie
    }
  }
`

export default ADD_COMMENT
