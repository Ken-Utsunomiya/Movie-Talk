import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

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
        <Button
          color="inherit"
          onClick={onLogoutClick}
        >
          Logout
        </Button>
      )
    } else {
      return (
        <div>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </div>
      )
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Talk
          </Typography>
          { renderButtons() }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
