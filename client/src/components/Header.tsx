import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import FETCH_USER from '../queries/fetchCurrentUser'
import LOGOUT from '../mutations/logout'

const Header = () => {
  const { data, loading, error } = useQuery(FETCH_USER)
  const [logout] = useMutation(LOGOUT)
  const navigate = useNavigate()

  const onLogoutClick = () => {
    logout({
      refetchQueries: [{ query: FETCH_USER }],
      awaitRefetchQueries: true
    })
    .then(() => navigate('/'))
  }

  const renderButtons = () => {
    if (loading) { return <div /> }
    if (error) { return <p>ERROR: {error.message}</p> }

    const { user } = data
    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick} href="/#" >Logout</a>
        </li>
      )
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }

  return (
    <nav>
      <div className='nav-wrapper blue'>
        <Link to="/" className='brand-logo left'>Movie Talk</Link>
        <ul className='right'>
          { renderButtons() }
        </ul>
      </div>
    </nav>
  )
}

export default Header
