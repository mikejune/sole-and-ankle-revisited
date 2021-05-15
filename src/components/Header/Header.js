import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, WEIGHTS } from '../../constants'
import Icon from '../Icon'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <MobileActions>
          <ShoppingButton>
            <Icon id='shopping-bag' />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingButton>
          <UnstyledButton>
            <Icon id='search' />
            <VisuallyHidden>Open search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${p => p.theme.QUERIES.tablet} {
    border-top: 4px solid ${p => p.theme.COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${p => p.theme.QUERIES.phone} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${p => p.theme.QUERIES.tablet} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media ${p => p.theme.QUERIES.tablet} {
    display: flex;
    gap: 32px;
  }

  @media ${p => p.theme.QUERIES.phone} {
    gap: 16px;
  }
`

const ShoppingButton = styled(UnstyledButton)`
  transform: translateX(-4px);
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${p => p.theme.QUERIES.tablet} {
    flex: revert;
  }
`

const Filler = styled.div`
  flex: 1;

  @media ${p => p.theme.QUERIES.tablet} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
