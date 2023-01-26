import { GraphQLString } from 'graphql'

import UserType from '../types/user_type'
import * as AuthService from '../../services/auth'

const login = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue: any, { email, password }: { email: string, password: string}, req: any) {
    return AuthService.login({ email, password, req })
  }
}

export default login
