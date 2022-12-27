import mongoose from 'mongoose'

const Schema = mongoose.Schema
export interface MovieDoc extends mongoose.Document {
  _id: number
  title: string
  comments: any[]
}

export interface MovieModel extends mongoose.Model<MovieDoc> {
  findComments(id: String): any[]
  addComment(id: String, content: String): any[]
}

export const MovieSchema = new Schema({
  _id: { type: Number },
  title: { type: String },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

MovieSchema.static('findComments', function(id) {
  return this.findById(id)
    .populate('comments')
    .then((movie: any) => movie.comments)
})

MovieSchema.static('addComment', function(id, content) {
  const Comment = mongoose.model('comment')

  return this.findById(id)
    .then((movie: any)=> {
      const comment = new Comment({ content, movie })
      movie.comments.push(comment)
      return Promise.all([comment.save(), movie.save()])
        .then(([_, movie]) => movie)
    })
})

export const Movie: MovieModel = mongoose.model<MovieDoc, MovieModel>('movie', MovieSchema)
export default Movie
