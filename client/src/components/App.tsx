import React, { ReactNode } from 'react'

import Header from './Header'

type AppProps = {
  children: ReactNode
}


const App = (props: AppProps) => {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  )
}

export default App
