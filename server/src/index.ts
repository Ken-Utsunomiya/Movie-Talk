import * as dotenv from 'dotenv'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import './models'
import mongoose from 'mongoose'
import cors from 'cors'

import schema from './schema/schema'

dotenv.config()

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)
mongoose.connect(String(process.env.MONGO_URI))
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => console.log('Error connecting to MongoDB instance:', error))

const app: express.Express = express()

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

app.get('/', (req, res) => {
  res.send("hello world")
})
