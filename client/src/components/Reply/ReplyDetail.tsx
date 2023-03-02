import { Box, Paper, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import DELETE_REPLY from '../../queries/deleteReply'
import { ReplyType } from '../../interfaces/ReplyType'
import { useMutation } from '@apollo/client'
import FETCH_COMMENT from '../../queries/fetchComment'

const ReplyDetail = ({ reply, commentId, uid }: { commentId: String, reply: ReplyType, uid: String }) => {
  const [deleteReply, { error }] = useMutation(DELETE_REPLY)

  const onDeleteClick = (id: String) => {
    deleteReply({
      variables: { id },
      refetchQueries: [{
        query: FETCH_COMMENT,
        variables: { id: commentId }
      }]
    })
    .catch(({ message }: { message: string }) => alert(message))
  }

  if (error) { return <div>error</div> }

  return (
    <Box sx={{ borderColor: "red", border: "2px solid grey" }}>
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
              <Grid>
                <Typography variant="body2" gutterBottom>
                  { reply.content }
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Posted by { reply.uid } at { reply.createdAt }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <IconButton
            aria-label="edit">
              <EditIcon />
            </IconButton>
          { uid === reply.uid ? 
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDeleteClick(reply.id)}>
              <DeleteIcon />
            </IconButton> : <div />
          }
        </Grid>
      </Paper>
    </Box>
  )
}

export default ReplyDetail
