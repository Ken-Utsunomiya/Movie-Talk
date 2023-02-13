import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Button, Typography } from '@mui/material'

const CommentsHeader = ({ comment_count }: { comment_count: number }) => {
  const navigate = useNavigate()

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Typography component="h6" variant="h6">
        { comment_count } Comments
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('comments/new')}
      >
        Add Comment
      </Button>
    </Grid>
  )
}

export default CommentsHeader
