import styled, { css } from 'styled-components'

import { Link } from 'gatsby'

const transitionLinks = css`
  transition: box-shadow .37s ease-in;
  transition: color .15s ease-out;
`

export const ImageContainer = styled.div`
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

export const NavigationContent = styled.div`
  
`

export const ButtonContainer = styled.div`
  margin-bottom: 10px;
  padding: 7px;
  display: flex;
  justify-content: flex-end;
`

export const NavContainer = styled.nav`
  height: 100%;
  background: ${props => props.theme.navbar};
  box-shadow: 1px 0 2px rgba(0, 0, 0, .5);
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-103%);
  transition: transform .45s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`

// Link Container
export const ListContainer = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 0;
`

export const ListItems = styled.li`
  margin: 0;
  font-size: .7rem;
  height: 50px;
  transition: background .35s ease-in;
  &:focus, &:active {
    background: ${props => props.theme.hoverBg};
  }
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
  color: #333;

  &:hover, &:active {
    color: ${props => props.theme.link};
  } 
`

export const HrContainer = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(238,238,238,0.9);
`
// Social Container
const SocialButton = styled.span`
  margin: 10px;
  color: ${props => props.theme.link};
`

export const SocialIcons = styled.a`
  margin: 0px 25px 0 -10px;
  box-shadow: none;
`

export const GithubButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.github};
    transition: ${transitionLinks};
  }
`

export const TwitterButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.twitter};
    transition: ${transitionLinks};
  }
`

export const InstagramButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.instagram};
    transition: ${transitionLinks};
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const SocialIconsMobile = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -50px;
`