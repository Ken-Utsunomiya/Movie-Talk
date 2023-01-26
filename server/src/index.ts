import * as dotenv from 'dotenv'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import './models'
import mongoose from 'mongoose'
import cors from 'cors'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport'

import schema from './schema/schema'

dotenv.config()

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)
mongoose.connect(String(process.env.MONGO_URI))
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => console.log('Error connecting to MongoDB instance:', error))

const app: express.Express = express()

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    mongoUrl: String(process.env.MONGO_URI)
  })
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000']
}))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5000, () => {
  console.log("Listening at localhost:5000");
})
