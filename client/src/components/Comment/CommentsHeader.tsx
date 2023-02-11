import React, { useState } from 'react'

import { TextField } from '@mui/material'

const CommentsHeader = ({ comment_count }: { comment_count: number }) => {
  const [comment, setComment] = useState("")
  return (
    <div>
      <h4>{ comment_count } Comments</h4>
      <TextField
        id="comment-input-field"
        label="Add a comment ..."
        variant="standard"
        sx={{ display: "flex" }}
        margin="normal"
        multiline
        onChange={e => setComment(e.target.value)}
      />
    </div>
  )
}

export default CommentsHeader
