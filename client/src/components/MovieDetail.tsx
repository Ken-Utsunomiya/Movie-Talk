import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

import FETCH_MOVIE from '../queries/fetchMovie'
import CommentList from './CommentList'

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
      {data.movie.title}
      <CommentList comments={data.movie.comments}/>
    </div>
  )
}

export default MovieDetail
