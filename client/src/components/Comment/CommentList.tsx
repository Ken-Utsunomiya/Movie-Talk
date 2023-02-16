import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FaceIcon from '@mui/icons-material/Face'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import { Comment } from '../../interfaces/Comment'
import auth from '../../auth/firebase'
import DELETE_COMMENT from '../../queries/deleteComment'
import FETCH_MOVIE from '../../queries/fetchMovie'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const { id } = useParams()
  const [uid, setUid] = useState("")
  const [deleteComment, { error }] = useMutation(DELETE_COMMENT)

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
          <ListItemButton>
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
              </IconButton> :
              <div />
            }
          </ListItemButton>
        )
      })}
    </List>
  )
}

export default CommentList
