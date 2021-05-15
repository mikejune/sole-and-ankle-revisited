import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <ResponsiveSelect
            label='Sort'
            value={sortId}
            onChange={ev => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </ResponsiveSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ResponsiveSpacer size={42} />
        <ResponsiveShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${p => p.theme.QUERIES.tablet} {
    flex-direction: column-reverse;
    gap: initial;
  }
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${p => p.theme.QUERIES.tablet} {
    flex: 0;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`

const ResponsiveShoeSidebar = styled(ShoeSidebar)`
  @media ${p => p.theme.QUERIES.tablet} {
    & {
      display: none;
    }
  }
`

const ResponsiveSpacer = styled(Spacer)`
  @media ${p => p.theme.QUERIES.tablet} {
    & {
      display: none;
    }
  }
`

const ResponsiveSelect = styled(Select)`
  @media ${p => p.theme.QUERIES.phone} {
    & {
      display: none;
    }
  }
`

export default ShoeIndex
