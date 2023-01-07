import { useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

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
      { data.movies.map(({ id, movieId, title }: { id: String, movieId: number, title: String }) => {
        return (
          <div className='collection-item' key={movieId}>
            <li>
              <Link to={`${id}`}>
                {title}
              </Link>
            </li>
          </div>
        )
      })}
    </div>
  )

}

export default MovieList
