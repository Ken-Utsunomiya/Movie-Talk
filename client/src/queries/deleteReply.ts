import { gql } from '@apollo/client'

const DELETE_REPLY = gql`
  mutation DeleteReply($id: ID!) {
    deleteReply(id: $id) {
      id
    }
  }
`

export default DELETE_REPLY
