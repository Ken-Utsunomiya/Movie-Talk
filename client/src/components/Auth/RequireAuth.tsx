/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FETCH_USER from '../../queries/fetchCurrentUser'

const RequireAuth = (BaseComponent: () => JSX.Element) => () => {
  const { data, loading } = useQuery(FETCH_USER)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !data?.user) {
      navigate('/login')
    }
  })

  return <BaseComponent />
}

export default RequireAuth
