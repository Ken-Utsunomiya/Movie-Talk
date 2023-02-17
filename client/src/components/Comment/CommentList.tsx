import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { List, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import DeleteIcon from '@mui/icons-material/Delete'

import { Comment } from '../../interfaces/Comment'
import auth from '../../auth/firebase'
import DELETE_COMMENT from '../../queries/deleteComment'
import FETCH_MOVIE from '../../queries/fetchMovie'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const { id } = useParams()
  const [uid, setUid] = useState("")
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUid(user.uid) }
    })
  }, [])

  if (error) { return <div>{ error.message }</div> }

  const onCommentDelete = (commentId: string) => {
    deleteComment({
      variables: { id: commentId },
      refetchQueries: [{
        query: FETCH_MOVIE,
        variables: { id }
      }],
      awaitRefetchQueries: true
    })
  }

  return (
    <List>
      { comments.map((comment: Comment) => {
        return (
          <ListItemButton
            onClick={() => navigate(`comments/${comment.id}`)}>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText 
              primary={ comment.title } 
              secondary={ comment.createdAt }
            />
            { uid === comment.uid ? 
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onCommentDelete(comment.id)}>
                <DeleteIcon />
              </IconButton> : <div />
            }
          </ListItemButton>
        )
      })}
    </List>
  )
}

export default CommentList
