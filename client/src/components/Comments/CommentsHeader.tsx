import React from 'react'

const CommentsHeader = ({ comment_count }: { comment_count: number }) => {
  return (
    <div>
      <h4>{ comment_count } Comments</h4>
    </div>
  )
}

export default CommentsHeader
