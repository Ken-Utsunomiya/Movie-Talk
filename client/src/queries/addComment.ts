import { gql } from '@apollo/client'

const ADD_COMMENT = gql`
  mutation AddComment($id: ID!, $title: String!, $uid: String!, $content: String!){
    addCommentToMovie(id: $id, title: $title, uid: $uid, content: $content) {
      id
    }
  }
`

export default ADD_COMMENT
