import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'

import FETCH_COMMENT from '../../queries/fetchComment'

const CommentDetail = () => {
  const { commentId } = useParams()
  const { data, loading, error } = useQuery(FETCH_COMMENT, {
    variables: { id: commentId }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>{ data.comment.title }</div>
  )
}

export default CommentDetail
