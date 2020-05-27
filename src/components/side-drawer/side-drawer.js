import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import MenuExitButton from '../menu-exit-button/menu-exit-button'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import {
  ImageContainer,
  NavigationContent,
  ButtonContainer,
  NavContainer,
  ListContainer,
  ListItems,
  LinkContainer,
  HrContainer,
  SocialIcons,
  GithubButton,
  TwitterButton,
  InstagramButton,
  SocialContainer,
  SocialIconsMobile,
} from './side-drawer.styles'

const theme = {
  twitter: '#00acee',
  instagram: '#e1306c',
  github: '#6e5494',
  link: '#333',
  navbar: '#eee',
  hoverBg: '#f4f4f4'
}

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

export default SideDrawer