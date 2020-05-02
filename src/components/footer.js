import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faInstagram,
    faTwitter,
 } from '@fortawesome/free-brands-svg-icons'

import styled, { css, ThemeProvider } from "styled-components"

const Footer = () => {
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
            <FooterText>
              © {new Date().getFullYear()}, Created by
              {` `}
              <LinkContainer href="/">tinashe88</LinkContainer>
            </FooterText>
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

const transitionAnimation = css`
  transition: color .5s ease-in-out;
`

const FooterText = styled.footer`
  text-align: center;
  margin: 24px;
  color: #ccc;
`

const LinkContainer = styled.a`
  box-shadow: none;
  color: #eee;
  transition: ${transitionAnimation};

  &:hover {
    color: #ccc;
  }
`

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
  display: none;

  @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

`

const SocialIconsMobile = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`



export default Footer