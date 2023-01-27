import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import App from './components/App'
import client from './api/client'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App children={<div>HOME</div>} />} />
          <Route path='/movies' element={<App children={<MovieList />} />} />
          <Route path="/movies/:id" element={<App children={<MovieDetail />} />} />
        </Routes>
      </HashRouter>
    </ApolloProvider>
  )
}

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()