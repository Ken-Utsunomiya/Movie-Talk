import mongoose from 'mongoose'
import passport from 'passport'
import { LocalStrategy } from 'passport-local'
import { UserDoc, UserModel } from '../interfaces/user'

import User from '../models/user'

passport.serializeUser((user: UserDoc, done: any) => {
  done(null, user.id)
})

passport.deserializeUser((id: string, done: any) => {
  User.findById(id, (err: mongoose.CallbackError | undefined, user: UserModel) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email: string, password: string, done: any) => {
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

export const signup = ({ email, password, req }) => {
  const user = new User({ email, password })
  if (!email || !password) {
    throw new Error('You must provide an email and password.')
  }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) { 
        throw new Error('Email in use')
      }
      return user.save()
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, (err) => {
          if (err) {
            reject(err)
          }
          resolve(user)
        })
      })
    })
}

export const login = ({ email, password, req }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { 
        reject(new Error('Invalid credentials.'))
      }
      req.login(user, () => resolve(user))
    })({ body: { email, password } })
  })
}