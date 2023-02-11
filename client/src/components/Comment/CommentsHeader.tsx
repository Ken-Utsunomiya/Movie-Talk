import React, { useState } from 'react'

import { TextField } from '@mui/material'

const CommentsHeader = ({ comment_count }: { comment_count: number }) => {
  const [comment, setComment] = useState("")
  return (
    <div>
      <h4>{ comment_count } Comments</h4>
      <TextField
        id="standard-basic"
        label="Add a comment ..."
        variant="standard"
        sx={{ display: "flex", maxWidth: 700 }}
        margin="normal"
        multiline
        onChange={e => setComment(e.target.value)}
      />
    </div>
  )
}

export default CommentsHeader
