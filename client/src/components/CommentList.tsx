import React from 'react'

import { Comment } from '../interfaces/Comment'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className='collection'>
      { comments.map(({ title }: { title: String }) => {
        return (
          <div className='collection-item'>
            <li>
              { title }
            </li>
          </div>
        )
      })}
    </div>
  )
}

export default CommentList
