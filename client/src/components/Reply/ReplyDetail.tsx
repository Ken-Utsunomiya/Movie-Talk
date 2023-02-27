import { Box, Paper, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { ReplyType } from '../../interfaces/ReplyType'

const ReplyDetail = ({ reply, uid }: { reply: ReplyType, uid: String }) => {
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
              aria-label="delete">
              <DeleteIcon />
            </IconButton> : <div />
          }
        </Grid>
      </Paper>
    </Box>
  )
}

export default ReplyDetail
