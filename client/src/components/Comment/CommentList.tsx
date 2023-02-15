import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FaceIcon from '@mui/icons-material/Face'
import React from 'react'

import { Comment } from '../../interfaces/Comment'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <List>
      { comments.map((comment: Comment) => {
        return (
          <ListItemButton>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={ comment.title } />
          </ListItemButton>
        )
      })}
    </List>
  )
}

export default CommentList
