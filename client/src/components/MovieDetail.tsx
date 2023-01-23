import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

import FETCH_MOVIE from '../queries/fetchMovie'
import CommentList from './Comment/CommentList'
import CommentsHeader from './Comment/CommentsHeader'

const MovieDetail = () => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(FETCH_MOVIE, {
    variables: { id: id }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <h3>{data.movie.title}</h3>
      <CommentsHeader comment_count={data.movie.comments.length}/>
      <CommentList comments={data.movie.comments}/>
    </div>
  )
}

export default MovieDetail
