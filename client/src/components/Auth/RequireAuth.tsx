/* eslint-disable react-hooks/rules-of-hooks */
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import auth from '../../auth/firebase'

const RequireAuth = (BaseComponent: () => JSX.Element) => () => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login')
      }
    })
  })

  return <BaseComponent />
}

export default RequireAuth
