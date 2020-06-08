import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MenuButton from '../menu-button/menu-button'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faInstagram,
    faTwitter,
 } from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import {
  Container,
  NavbarContainer,
  LeftContainer,
  LeftNav,
  NavContent,
  NavItems,
  HomeLink,
  BlogLink,
  AboutLink,
  TagsLink,
  RightContainer,
  RightNav,
  SocialIcons,
  GithubButton,
  TwitterButton,
  InstagramButton
} from './navbar.styles'

const theme = {
  twitter: '#00acee',
  instagram: '#e1306c',
  github: '#6e5494',
  link: '#333',
  homeLink: '#2CAFDA',
  blogLink: '#F65286',
  aboutLink: '#19A974',
  tagsLink: '#FF982B'
}

const Navbar = ({...props}) => {
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

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <NavbarContainer>
            <MenuButton click={props.clickHandler}/>
            <LeftContainer>
              <LeftNav>
                <NavContent>
                  <NavItems>
                    <HomeLink 
                      to="/"
                      getProps={({ isCurrent }) => {
                        return {
                          style: {
                            color: isCurrent ?  
                              `${theme.homeLink}` 
                              : `${theme.link}`,
                            boxShadow: isCurrent ?
                              `0px 2px rgba(44, 175, 218, .3)`
                              : `${theme.link}`,
                          }
                        }
                      }}
                    >
                      Home
                    </HomeLink>
                  </NavItems>
                  <NavItems>
                    <BlogLink 
                      to="/blog"
                      getProps={({ isPartiallyCurrent }) => {
                        return {
                          style: {
                            color: isPartiallyCurrent ?  
                              `${theme.blogLink}` 
                              : `${theme.link}`,
                            boxShadow: isPartiallyCurrent ?
                              `0px 2px rgba(246, 82, 134, .3)`
                              : `${theme.link}`,
                          }
                        }
                      }}
                      partiallyActive={true}
                    >
                        Blog
                    </BlogLink>
                  </NavItems>
                  <NavItems>
                    <AboutLink 
                      to="/about"
                      getProps={({ isCurrent }) => {
                        return {
                          style: {
                            color: isCurrent ?  
                              `${theme.aboutLink}` 
                              : `${theme.link}`,
                            boxShadow: isCurrent ?
                              `0px 2px rgba(25, 169, 115, .3)`
                              : `${theme.link}`,
                          }
                        }
                      }}
                    >
                        About
                    </AboutLink>
                  </NavItems>
                  <NavItems>
                    <TagsLink 
                      to={`/tags`}
                      getProps={({ isPartiallyCurrent }) => {
                        return {
                          style: {
                            color: isPartiallyCurrent ?  
                              `${theme.tagsLink}` 
                              : `${theme.link}`,
                            boxShadow: isPartiallyCurrent ?
                              `0px 2px rgba(255, 152, 43, .3)`
                              : `${theme.link}`,
                          }
                        }
                      }}
                    >
                        Tags
                    </TagsLink>
                  </NavItems>
                </NavContent>
              </LeftNav>
            </LeftContainer>
            <RightContainer>
              <RightNav>
                <SocialIcons
                  href={
                    "https://github.com/" + socialHandle.github
                  }
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <GithubButton>
                    <FontAwesomeIcon 
                      icon={faGithub}
                      aria-hidden="true"
                      size="2x"
                    />
                  </GithubButton>
                </SocialIcons>
                <SocialIcons
                  href={
                    "https://twitter.com/" + socialHandle.twitter
                  }
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <TwitterButton>
                    <FontAwesomeIcon 
                      icon={faTwitter}
                      aria-hidden="true"
                      size="2x"
                    />
                  </TwitterButton>
                </SocialIcons>
                <SocialIcons
                  href={
                    "https://instagram.com/" + socialHandle.instagram
                  }
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <InstagramButton>
                    <FontAwesomeIcon 
                      icon={faInstagram}
                      aria-hidden="true"
                      size="2x"
                    />
                  </InstagramButton>
                </SocialIcons>
              </RightNav>
            </RightContainer>
          </NavbarContainer>
        </Container>
      </ThemeProvider>
    )
}

export default Navbar