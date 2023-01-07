import { useQuery } from '@apollo/client'
import React from 'react'

import FETCH_COMMENTS from '../queries/fetchComments'
import { Comment } from '../interfaces/Comment'
import ReplyList from './ReplyList'

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
      { data.comments.map((comment: Comment) => {
        return (
          <div className='collection-item'>
            { comment.title }
            <div className='collection'>
              <ReplyList comment_id={comment.id} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentList
