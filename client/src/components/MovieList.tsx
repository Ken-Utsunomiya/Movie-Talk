import { useQuery } from '@apollo/client'
import React from 'react'

import FETCH_MOVIES from '../queries/fetchMovies'

const MovieList = () => {
  const { data, loading, error } = useQuery(FETCH_MOVIES)

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className='collection'>
      { data.movies.map(({ id, title }: { id: number; title: string }) => {
        return (
          <li key={id} className="collection-item">{title}</li>
        )
      })}
    </div>
  )

}

export default MovieList
