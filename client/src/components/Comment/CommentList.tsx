import React from 'react'

import { Comment } from '../../interfaces/Comment'
import ReplyList from '../ReplyList'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className='collection'>
      { comments.map((comment: Comment) => {
        return (
          <div className='collection-item'>
            { comment.title }
            <ReplyList replies={comment.replies} />
          </div>
        )
      })}
    </div>
  )
}

export default CommentList
