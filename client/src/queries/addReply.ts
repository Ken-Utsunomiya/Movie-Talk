import { gql } from '@apollo/client'

const ADD_REPLY = gql`
  mutation AddReply($id: ID!, $uid: String!, $content: String!){
    addReplyToComment(id: $id, uid: $uid, content: $content) {
      id
    }
  }
`

export default ADD_REPLY
