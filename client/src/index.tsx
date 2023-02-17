import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'

import App from './components/App'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import MovieDetail from './components/MovieDetail'
import MovieList from './components/MovieList'
import SignupForm from './components/Auth/SignupForm'
import LoginForm from './components/Auth/LoginForm'
import CommentCreate from './components/Comment/CommentCreate'
import CommentDetail from './components/Comment/CommentDetail'
import client from './api/client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App children={<Home />} />} />
        <Route path='/movies' element={<App children={<MovieList />} />} />
        <Route path='/movies/:id' element={<App children={<MovieDetail />} />} />
        <Route path='/movies/:id/comments/new' element={<App children={<CommentCreate />} />} />
        <Route path='/movies/:movieId/comments/:commentId' element={<App children={<CommentDetail />} />} />
        <Route path='/dashboard' element={<App children={<Dashboard />} />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()