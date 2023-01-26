import UserType from '../types/user_type'

const logout = {
  type: UserType,
  resolve(parentValue: any, args: any, req: any) {
    const { user } = req
    req.logout((err: Error) => console.error(err))
    return user
  }
}

export default logout
