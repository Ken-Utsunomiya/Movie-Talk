import { gql } from '@apollo/client'

const FETCH_USER = gql`
  {
    user {
      id
      email
    }
  }
`

export default FETCH_USER
