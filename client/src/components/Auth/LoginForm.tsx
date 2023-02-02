import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import AuthForm from './AuthForm'
import auth from '../../auth/firebase'

const LoginForm = () => {
  const navigate = useNavigate()

  const onSubmit = ({email, password}: {email: string, password: string}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/dashboard'))
    .catch(err => alert(err))
  }

  return (
    <AuthForm
      isLogin={true}
      onSubmit={onSubmit}
    />
  )
}

export default LoginForm
