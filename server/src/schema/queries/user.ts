
import UserType from '../types/user_type'

const user = {
  type: UserType,
  resolve(parentValue: any, args: any, req: any) {
    return req.user
  }
}

export default user
