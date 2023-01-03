import mongoose from 'mongoose'

import { MovieModel, MovieDoc } from '../interfaces/movie'
import Comment from './comment'

const Schema = mongoose.Schema

export const MovieSchema = new Schema({
  movieId: { type: Number },
  title: { type: String },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

MovieSchema.static('findComments', function(id: String) {
  return this.findById(id)
    .populate('comments')
    .then((movie: MovieDoc) => movie.comments)
})

MovieSchema.static('addCommentToMovie', function(id: String, title: String, content: String) {
  return this.findById(id)
    .then((movie: MovieDoc)=> {
      const createdAt = Date.now()
      const comment = new Comment({ title, createdAt, content, movie })
      movie.comments.push(comment)
      return Promise.all([comment.save(), movie.save()])
        .then(([_, movie]) => movie)
    })
})

export const Movie: MovieModel = mongoose.model<MovieDoc, MovieModel>('movie', MovieSchema)
export default Movie
