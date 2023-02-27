import React, { useState } from 'react'
import List from '@mui/material/List'

import { ReplyType } from '../../interfaces/ReplyType'
import ReplyDetail from './ReplyDetail'
import { Box, Button } from '@mui/material'

const ReplyList = ({ replies, uid }: { replies: ReplyType[], uid: String }) => {
  const [replying, setReplying] = useState(false)

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        { replies.map((reply: ReplyType) => {
          return (
            <ReplyDetail reply={reply} uid={uid}/>
          )
        })}
      </List>
      { !replying ? 
        <Button variant="contained" onClick={() => setReplying(!replying)}>Reply</Button> : 
        <div />}
    </Box>
  )
}

export default ReplyList
