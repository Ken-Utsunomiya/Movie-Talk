import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthForm from './AuthForm'
import FETCH_USER from '../../queries/fetchCurrentUser'
import LOGIN from '../../mutations/login'

const LoginForm = () => {
  const [login] = useMutation(LOGIN)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const onSubmit = ({email, password}: {email: string, password: string}) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
      awaitRefetchQueries: true
    })
    .catch((res) => {
      setErrors(res.graphQLErrors.map(({ message }: { message: string }) => message))
    })
    .then(() => navigate('/#/dashboard'))
  }

  return (
    <AuthForm
      isLogin={true}
      errors={errors}
      onSubmit={onSubmit}
    />
  )
}

export default LoginForm
