import React from 'react'

import { Link } from 'gatsby'

import styled, { css, ThemeProvider } from 'styled-components'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer'

  if(props.show){
    drawerClasses = 'side-drawer open'
  }
  return (
    <NavContainer className={drawerClasses}>
      <ListContainer>
        <ListItems>
          <LinkContainer 
            to="/"
          >
            Home
          </LinkContainer>
        </ListItems>
        <HrContainer/>
        <ListItems>
          <LinkContainer 
            to="/blog/"
          >
            Blog
          </LinkContainer>
        </ListItems>
        <HrContainer/>
        <ListItems>
          <LinkContainer 
            to="/about/"
          >
            About
          </LinkContainer>
        </ListItems>
        <HrContainer/>
        <ListItems>
          <LinkContainer 
            to="/tags/"
          >
            Tags
          </LinkContainer>
        </ListItems>
        <HrContainer/>
      </ListContainer>
    </NavContainer>
  )
}


const NavContainer = styled.nav`
  height: 100%;
  background: #fff;
  box-shadow: 1px 0 2px rgba(0, 0, 0, .5);
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-103%);
  transition: transform .25s ease-in;

  &.open {
    transform: translateX(0);
  }
`


const ListContainer = styled.ul`
  height: 100%;
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
`

const ListItems = styled.li`
  margin: .5rem 0;
  font-size: .7rem;

`

const LinkContainer = styled(Link)`
  box-shadow: none;
  color: #333;

  &:hover, &:active {
    color: #fa3923;
  } 
`

const HrContainer = styled.hr`
  margin-top: 10px;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(238,238,238,0.9);
`

export default SideDrawer