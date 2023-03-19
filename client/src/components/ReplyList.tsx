import React from 'react'

import { Reply } from '../interfaces/Reply'

const ReplyList = ({ replies }: { replies: Reply[] }) => {
  return (
    <div className='collection'>
      { replies.map((reply: Reply) => {
        return (
          <div className='collection-item'>
            { reply.content }
          </div>
        )
      })}
    </div>
  )
}

export default ReplyList
