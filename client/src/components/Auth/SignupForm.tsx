import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import AuthForm from './AuthForm'
import auth from '../../auth/firebase'

const SignupForm = () => {
  const navigate = useNavigate()

  const onSubmit = ({email, password}: {email: string, password: string}) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/movies'))
    .catch(err => alert(err))
  }

  return (
    <AuthForm
      isLogin={false}
      onSubmit={onSubmit}
    />
  )
}

export default SignupForm
