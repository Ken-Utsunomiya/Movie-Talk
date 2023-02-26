import React from 'react'
import List from '@mui/material/List'

import { ReplyType } from '../../interfaces/ReplyType'
import ReplyDetail from './ReplyDetail'

const ReplyList = ({ replies, uid }: { replies: ReplyType[], uid: String }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      { replies.map((reply: ReplyType) => {
        return (
          <ReplyDetail reply={reply} uid={uid}/>
        )
      })}
    </List>
  )
}

export default ReplyList
