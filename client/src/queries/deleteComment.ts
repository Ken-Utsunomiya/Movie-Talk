import { gql } from '@apollo/client'

const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    id
  }
`

export default DELETE_COMMENT
