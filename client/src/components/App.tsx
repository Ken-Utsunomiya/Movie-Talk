import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className='ui container'>
          <Routes>
            <Route path="/" element={<div>Hello App</div>} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
}

export default App
