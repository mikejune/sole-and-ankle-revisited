import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import Header from '../Header'
import ShoeIndex from '../ShoeIndex'
import { QUERIES } from '../../constants'

const App = () => {
  const [sortId, setSortId] = useState('newest')

  return (
    <ThemeProvider theme={{ QUERIES }}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  )
}

const Main = styled.main`
  padding: 64px 32px;
`

export default App
