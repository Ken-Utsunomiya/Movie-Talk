import { useQuery } from '@apollo/client'
import { Grid, Paper, Typography, styled, Box } from '@mui/material'
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
    <h1>Comment</h1>
  )
}

export default CommentDetail
