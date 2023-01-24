import mongoose from 'mongoose'

export interface UserDoc extends mongoose.Document {
  email: string
  password: string
}

export interface UserModel extends mongoose.Model<UserDoc> {
  signup(email: string, password: string): UserDoc
  login(email: string, password: string): UserDoc
  logout(): UserDoc
}