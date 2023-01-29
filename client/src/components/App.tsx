import React, { ReactNode } from 'react'

import { Container } from 'semantic-ui-react'

import Header from './Header'

type AppProps = {
  children: ReactNode
}


const App = (props: AppProps) => {
  return (
    <Container>
      <Header />
      { props.children }
    </Container>
  )
}

export default App
