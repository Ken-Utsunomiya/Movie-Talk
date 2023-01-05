import { useQuery } from '@apollo/client'
import React from 'react'

import FETCH_COMMENTS from '../queries/fetchComments'

const CommentList = ({ movie_id }: { movie_id: string }) => {
  const { data, loading, error } = useQuery(FETCH_COMMENTS, {
    variables: { movie_id }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className='collection'>
      { data.comments.map(({ title }: { title: String }) => {
        return (
          <div className='collection-item'>
            <li>
              { title }
            </li>
          </div>
        )
      })}
    </div>
  )
}

export default CommentList
