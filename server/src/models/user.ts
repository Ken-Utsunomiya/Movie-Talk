import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

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
  bcrypt.genSalt(10, (err: mongoose.CallbackError | undefined, salt: number) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, (err: mongoose.CallbackError | undefined, hash: string) => {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

UserSchema.method('comparePassword', function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.CallbackError, isMatch: boolean) => {
    cb(err, isMatch)
  })
})
