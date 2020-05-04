import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faInstagram,
    faTwitter,
 } from '@fortawesome/free-brands-svg-icons'

import styled, { css, ThemeProvider } from 'styled-components'

const SideDrawer = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
          siteMetadata {
            siteUrl
            social {
              twitter
              instagram
              github
            }
          }
      }
    }
  `)
  const socialHandle = data.site.siteMetadata.social
  console.log(data)
  let drawerClasses = 'side-drawer'

  if(props.show){
    drawerClasses = 'side-drawer open'
  }
  return (
    <ThemeProvider theme={theme}>
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
        <SocialContainer>
          <SocialIconsMobile>
            <SocialIcons
            href={
              "https://github.com/"
              + socialHandle.github
            }
            target="__blank"
            rel="noopener noreferrer"
            >
            <GithubButton>
              <FontAwesomeIcon 
              icon={faGithub}
              aria-hidden="true"
              size="1x"
              />
            </GithubButton>
            </SocialIcons>
            <SocialIcons
            href={
              "https://twitter.com/"
              + socialHandle.twitter
            }
            target="__blank"
            rel="noopener noreferrer"
            >
            <TwitterButton>
              <FontAwesomeIcon 
              icon={faTwitter}
              aria-hidden="true"
              size="1x"
              />
            </TwitterButton>
            </SocialIcons>
            <SocialIcons
            href={
              "https://instagram.com/"
              + socialHandle.instagram
            }
            target="__blank"
            rel="noopener noreferrer"
            >
            <InstagramButton>
              <FontAwesomeIcon 
              icon={faInstagram}
              aria-hidden="true"
              size="1x"
              />
            </InstagramButton>
            </SocialIcons>
          </SocialIconsMobile>
        </SocialContainer>
      </NavContainer>
    </ThemeProvider>
  )
}

const theme = {
  twitter: '#00acee',
  instagram: '#e1306c',
  github: '#6e5494',
  link: '#333',
}

const transitionLinks = css`
  transition: box-shadow .37s ease-in;
  transition: color .15s ease-out;
`

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

// Link Container
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
// Social Container
const SocialButton = styled.span`
  margin: 10px;
  color: ${props => props.theme.link};
`

const SocialIcons = styled.a`
  @media only screen and (max-width: 500px) {
    
    box-shadow: none;
  }
`

const GithubButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.github};
    transition: ${transitionLinks};
  }
`

const TwitterButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.twitter};
    transition: ${transitionLinks};
  }
`

const InstagramButton = styled(SocialButton)`
  &:hover {
    color: ${props => props.theme.instagram};
    transition: ${transitionLinks};
  }
`

const SocialContainer = styled.div`
  position: absolute;
  top: 80%;
  left: 33%;
`

const SocialIconsMobile = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`

export default SideDrawer