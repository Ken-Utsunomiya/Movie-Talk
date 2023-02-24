import { useQuery } from '@apollo/client'
import { Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Reply } from '../../interfaces/Reply'

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
    <Box sx={{ marginTop: '2rem'}}>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  { data.comment.title }
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="body2" gutterBottom>
                  { data.comment.content }
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Posted by { data.comment.uid } at { data.comment.createdAt }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container>
        { data.comment.replies.map((reply: Reply) => {
          return (
            <div>{ reply.content }</div>
          )
        })}
      </Grid>
    </Box>
  )
}

export default CommentDetail
