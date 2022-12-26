import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

import FETCH_MOVIE from '../queries/fetchMovie'

const MovieDetail = () => {
  const { _id } = useParams()

  const { data, loading, error } = useQuery(FETCH_MOVIE, {
    variables: { _id }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>{data.movie.title}</div>
  )
}

export default MovieDetail
