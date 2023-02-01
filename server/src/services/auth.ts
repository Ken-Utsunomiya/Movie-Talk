import mongoose from 'mongoose'
import passport from 'passport'
import { Strategy } from 'passport-local'
import { UserDoc, UserModel } from '../interfaces/user'

import User from '../models/user'

passport.serializeUser((user: any, done: any) => {
  done(null, user.id)
})

passport.deserializeUser((id: string, done: any) => {
  User.findById(id, (err: mongoose.CallbackError | undefined, user: UserModel) => {
    done(err, user)
  })
})

passport.use(new Strategy({ usernameField: 'email' }, (email: string, password: string, done: any) => {
  User.findOne({ email: email.toLowerCase() }, (err: mongoose.CallbackError | undefined, user: UserModel) => {
    if (err) {
      return done(err)
    }
    if (!user) {
      return done(null, false, 'Invalid Credentials')
    }
    user.comparePassword(password, (err: mongoose.CallbackError | undefined, isMatch: boolean) => {
      if (err) { 
        return done(err)
      }
      if (isMatch) {
        return done(null, user)
      }
      return done(null, false, 'Invalid credentials.')
    })
  })
}))

export const signup = async ({ email, password, req }: { email: string, password: string, req: any }) => {
  const user = new User({ email, password })
  if (!email || !password) {
    throw new Error('You must provide an email and password.')
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('Email in use')
  }
  const user_1 = await user.save()
  return await new Promise((resolve, reject) => {
    req.logIn(user_1, (err: Error) => {
      if (err) {
        reject(err)
      }
      resolve(user_1)
    })
  })
}

export const login = ({ email, password, req }: { email: string, password: string, req: any }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err: Error, user: UserDoc) => {
      if (!user) { 
        reject(new Error('Invalid credentials.'))
      }
      req.login(user, () => {
        resolve(user)
      })
    })({ body: { email, password } })
  })
}
