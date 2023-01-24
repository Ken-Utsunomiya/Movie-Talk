import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { UserDoc, UserModel } from '../interfaces/user'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: String,
  password: String
})

UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password ? user.password : "", salt, (err, hash) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

UserSchema.method('comparePassword', function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.CallbackError | undefined, isMatch: boolean) => {
    cb(err, isMatch)
  })
})

export const User: UserModel = mongoose.model<UserDoc, UserModel>('user', UserSchema)
export default User
