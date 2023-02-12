import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Link, Typography } from '@mui/material'

const CommentsHeader = ({ comment_count }: { comment_count: number }) => {
  const navigate = useNavigate()

  return (
    <Box>
      <Typography component="h6" variant="h6">
        { comment_count } Comments
      </Typography>
      <Link 
        component="button" 
        underline="none"
        variant="body1"
        onClick={() => navigate('comments/new')}
      >
        Add a Comment
      </Link>
    </Box>
  )
}

export default CommentsHeader
