import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthForm from './AuthForm'
import FETCH_USER from '../../queries/fetchCurrentUser'
import SIGNUP from '../../mutations/signup'

const SignupForm = () => {
  const [signup] = useMutation(SIGNUP)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const onSubmit = ({email, password}: {email: string, password: string}) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
      awaitRefetchQueries: true
    })
    .catch((res) => {
      setErrors(res.graphQLErrors.map(({ message }: { message: string }) => message))
    })
    .then(() => navigate('/'))
  }

  return (
    <AuthForm
      isLogin={false}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
}

export default SignupForm
