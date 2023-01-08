import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import client from '../api/client'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'


const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className='ui container'>
          <Routes>
            <Route path='/' element={<div>HOME</div>} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
}

export default App
