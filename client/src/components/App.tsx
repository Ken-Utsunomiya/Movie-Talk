import React, { ReactNode } from 'react'
import { Box, Grid } from '@mui/material'

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
        <Grid container spacing={10}>
          <Grid item xs={9}>
            <Box>
              { props.children }
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              { props.children }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
