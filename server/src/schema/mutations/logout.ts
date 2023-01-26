import UserType from '../types/user_type'

const logout = {
  type: UserType,
  resolve(parentValue, args, req) {
    const { user } = req
    req.logout(err => console.error(err))
    return user
  }
}

export default logout
