import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import ADD_COMMENT from '../../mutations/addComment'
import RequireAuth from '../Auth/RequireAuth'
import auth from '../../auth/firebase'
import { Box, Button, Container, TextField } from '@mui/material'

const CommentCreate = () => {
  const { id } = useParams()
  const [uid, setUid] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [addComment, { error }] = useMutation(ADD_COMMENT)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUid(user.uid) }
    })
  }, [])

  if (error) return <div>{ error.message }</div>

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addComment({
      variables: {
        id,
        title,
        uid,
        content
      }
    })
    navigate(`/movies/${id}`)
  }

  return (
    <Container component="main" maxWidth={false} sx={{ width: "90%"}}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Box 
          component="form" 
          noValidate 
          sx={{ mt: 1, width: '70%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          onSubmit={onSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="comment-title"
            label="Title"
            name="title"
            autoFocus
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="comment-content"
            label="Content"
            name="content"
            multiline
            maxRows={10}
            rows={20}
            onChange={e => setContent(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 7, mb: 2, width: '50%',  }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default RequireAuth(CommentCreate)
