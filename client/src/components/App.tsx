import React, { ReactNode } from 'react'

type AppProps = {
  children: ReactNode
}


const App = (props: AppProps) => {
  return (
    <div>
      { props.children }
    </div>
  )
}

export default App
