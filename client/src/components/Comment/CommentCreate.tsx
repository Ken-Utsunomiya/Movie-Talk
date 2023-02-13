import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'

import ADD_COMMENT from '../../mutations/addComment'

const CreateComment = ({ uid }: { uid: String }) => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [addComment, { error }] = useMutation(ADD_COMMENT)
  const navigate = useNavigate()

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
    <div>Create</div>
  )
}

export default CreateComment
