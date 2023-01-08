import { useQuery } from '@apollo/client'
import React from 'react'

import FETCH_REPLIES from '../queries/fetchReplies'
import { Reply } from '../interfaces/Reply'

const ReplyList = ({ comment_id }: { comment_id: string }) => {
  const { data, loading, error } = useQuery(FETCH_REPLIES, {
    variables: { comment_id }
  })

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className='collection'>
      { data.replies.map((reply: Reply) => {
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
