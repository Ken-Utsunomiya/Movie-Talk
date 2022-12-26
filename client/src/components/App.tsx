import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className='ui container'>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
}

export default App
