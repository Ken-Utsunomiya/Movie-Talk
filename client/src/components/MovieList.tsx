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
      { data.movies.map(({ id, title }: { id: number; title: String }) => {
        return (
          <li key={id} className="collection-item">
            <Link to={`movies/${id}`}>
              {title}
            </Link>
          </li>
        )
      })}
    </div>
  )

}

export default MovieList
