import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import Header from './Header'
import MovieDetail from './MovieDetail'
import MovieList from './MovieList'
import SignupForm from './Auth/SignupForm'
import LoginForm from './Auth/LoginForm'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='/movies' element={<MovieList />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default App
