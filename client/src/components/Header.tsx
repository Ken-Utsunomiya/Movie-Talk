import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import auth from '../auth/firebase'
import IUser from '../interfaces/User'

const Header = () => {
  const [user, setUser] = useState<IUser>({uid: "", email: ""})
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user
        setUser({ uid, email })
      } else {
        setUser({ uid: "", email: "" })
      }
    })
  })

  const onLogoutClick = () => {
    signOut(auth)
    .then(() => navigate('/'))
    .catch(err => alert(err))
  }

  const renderButtons = () => {
    if (user.uid) {
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
          <Button color="inherit" href="/signup">Sign Up</Button>
          <Button color="inherit" href="/login">Login</Button>
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
