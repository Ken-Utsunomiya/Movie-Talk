import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className='ui container'>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
}

export default App
