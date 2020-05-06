import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import MenuExitButton from './menu-exit-button'

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
      file(relativePath: {eq: "88-logo.png"}) {
        childImageSharp {
          fixed(width: 60, height: 47) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const siteMeta = data.site.siteMetadata
  const socialHandle = siteMeta.social

  let drawerClasses = 'side-drawer'

  if(props.show){
    drawerClasses = 'side-drawer open'
  }

  return (
    <ThemeProvider theme={theme}>
      <NavContainer className={drawerClasses}>
        <ButtonContainer>
          <MenuExitButton onClick={props.click}/>
        </ButtonContainer>
        <ImageContainer>
          <Img 
            fixed={data.file.childImageSharp.fixed}
            alt={"blog logo"}
            imgStyle={{
              display: `flex`,
            }}
          />
        </ImageContainer>
        {/* Put logo here */}
        <NavigationContent>
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
        </NavigationContent>
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
  navbar: '#eee',
  hoverBg: '#f4f4f4'
}

const transitionLinks = css`
  transition: box-shadow .37s ease-in;
  transition: color .15s ease-out;
`

const ImageContainer = styled.div`
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const NavigationContent = styled.div`
  
`

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  padding: 7px;
  display: flex;
  justify-content: flex-end;
`

const NavContainer = styled.nav`
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
const ListContainer = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 0;
`

const ListItems = styled.li`
  margin: 0;
  font-size: .7rem;
  height: 50px;
  transition: background .35s ease-in;
  &:focus, &:active {
    background: ${props => props.theme.hoverBg};
  }
`

const LinkContainer = styled(Link)`
  box-shadow: none;
  color: #333;

  &:hover, &:active {
    color: #fa3923;
  } 
`

const HrContainer = styled.hr`
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
  margin: 0px 25px 0 -10px;
  box-shadow: none;
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
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const SocialIconsMobile = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -50px;
`

export default SideDrawer