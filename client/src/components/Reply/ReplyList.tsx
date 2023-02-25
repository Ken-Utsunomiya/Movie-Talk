import React from 'react'
import List from '@mui/material/List'

import { ReplyType } from '../../interfaces/ReplyType'
import { Box, Paper, Grid, Typography } from '@mui/material'

const ReplyList = ({ replies, uid }: { replies: ReplyType[], uid: String }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      { replies.map((reply: ReplyType) => {
        return (
          <Box sx={{ borderColor: "red", border: "2px solid grey"}}>
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
              </Grid>
            </Paper>
          </Box>
        )
      })}
    </List>
  )
}

export default ReplyList
