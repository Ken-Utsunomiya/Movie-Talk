import { useMutation } from '@apollo/client'
import React, { useState } from 'react'

import AuthForm from './AuthForm'
import FETCH_USER from '../../queries/fetchCurrentUser'

const SignupForm = () => {
  const [signup] = useMutation()
  const [errors, setErrors] = useState([])

  const onSubmit = ({email, password}: {email: string, password: string}) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_USER }],
      awaitRefetchQueries: true
    })
    .catch((res) => {
      setErrors(res.graphQLErrors.map(({ message }: { message: string }) => message))
    })
  }

  return (
    <div className='container'>
      <h3>Sign Up</h3>
      <AuthForm
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default SignupForm
