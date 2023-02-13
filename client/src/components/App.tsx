import React, { ReactNode } from 'react'

import Header from './Header'
import { Container } from '@mui/system'

type AppProps = {
  children: ReactNode
}

const App = (props: AppProps) => {
  return (
    <div>
      <Header />
      <Container maxWidth={false} sx={{ width: '97%'}}>
        { props.children }
      </Container>
    </div>
  )
}

export default App
