import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid } from '@mui/material'

import FETCH_MOVIE from '../queries/fetchMovie'
import CommentList from './Comment/CommentList'
import CommentsHeader from './Comment/CommentsHeader'

const MovieDetail = () => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(FETCH_MOVIE, {
    variables: { id }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={9}>
          <Box>
            <h3>{data.movie.title}</h3>
            <CommentsHeader comment_count={data.movie.commentCount}/>
            <CommentList comments={data.movie.comments}/>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <h3>{data.movie.title}</h3>
            <CommentsHeader comment_count={data.movie.commentCount}/>
            <CommentList comments={data.movie.comments}/>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieDetail
