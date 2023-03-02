import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Box, Button, List, TextField } from '@mui/material'

import { ReplyType } from '../../interfaces/ReplyType'
import ReplyDetail from './ReplyDetail'
import FETCH_COMMENT from '../../queries/fetchComment'
import ADD_REPLY from '../../queries/addReply'

const ReplyList = ({ commentId, replies, uid }: { commentId: String, replies: ReplyType[], uid: String }) => {
  const [replying, setReplying] = useState(false)
  const [replyingContent, setReplyingContent] = useState("")
  const [addReplyToComment, { error }] = useMutation(ADD_REPLY)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addReplyToComment({
      variables: {
        id: commentId,
        uid: uid,
        content: replyingContent
      },
      refetchQueries: [{
        query: FETCH_COMMENT,
        variables: { id: commentId }
      }]
    })
    .catch(({ message }: { message: string }) => alert(message))
  }

  if (error) { return <div>error</div>}

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        { replies.map((reply: ReplyType) => {
          return (
            <ReplyDetail reply={reply} commentId={commentId} uid={uid}/>
          )
        })}
      </List>
      { !replying ? 
        <Button variant="contained" onClick={() => setReplying(!replying)}>Reply</Button> : 
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Box 
            component="form" 
            noValidate 
            sx={{ mt: 1, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
            onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="reply-content"
              label="Content"
              name="content"
              multiline
              rows={10}
              onChange={e => setReplyingContent(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Box>}
    </Box>
  )
}

export default ReplyList
