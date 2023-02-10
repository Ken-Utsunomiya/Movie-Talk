import mongoose from 'mongoose'

import { MovieModel, MovieDoc } from '../interfaces/movie'
import Comment from './comment'
import Review from './review'

const Schema = mongoose.Schema

export const MovieSchema = new Schema({
  movieId: { type: Number },
  title: { type: String },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]
})

MovieSchema.static('findComments', function(id: String) {
  return this.findById(id)
    .populate('comments')
    .then((movie: MovieDoc) => movie.comments)
})

MovieSchema.static('findReviews', function(id: String) {
  return this.findById(id)
    .populate('reviews')
    .then((movie: MovieDoc) => movie.reviews)
})

MovieSchema.static('addCommentToMovie', function(id: String, title: String, uid: String, content: String) {
  return this.findById(id)
    .then((movie: MovieDoc)=> {
      const createdAt = Date.now()
      const comment = new Comment({ uid, title, createdAt, content, movie })
      movie.comments.push(comment)
      return Promise.all([comment.save(), movie.save()])
        .then(([_, movie]) => movie)
    })
})

MovieSchema.static('addReviewToMovie', function(id: String, title: String, uid: String, content: String) {
  return this.findById(id)
    .then((movie: MovieDoc)=> {
      const createdAt = Date.now()
      const review = new Review({ title, createdAt, uid, content, movie })
      movie.reviews.push(review)
      return Promise.all([review.save(), movie.save()])
        .then(([_, movie]) => movie)
    })
})

export const Movie: MovieModel = mongoose.model<MovieDoc, MovieModel>('movie', MovieSchema)
export default Movie
