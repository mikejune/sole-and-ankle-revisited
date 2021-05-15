import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import Header from '../Header'
import ShoeIndex from '../ShoeIndex'
import * as CONSTANTS from '../../constants'

const App = () => {
  const [sortId, setSortId] = useState('newest')

  return (
    <ThemeProvider theme={CONSTANTS}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  )
}

const Main = styled.main`
  padding: 64px 32px;

  @media ${p => p.theme.QUERIES.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export default App
