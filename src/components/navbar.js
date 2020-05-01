import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faGithub,
    faInstagram,
    faTwitter,
 } from '@fortawesome/free-brands-svg-icons'
import styled, { css, ThemeProvider } from 'styled-components'

const theme = {
    twitter: '#00acee',
    instagram: '#e1306c',
    github: '#6e5494',
    link: '#333',
    homeLink: '#2CAFDA',
    aboutLink: '#F65286',
    tagsLink: '#FF982B'
}

const transitionLinks = css`
    transition: box-shadow .37s ease-in;
    transition: color .15s ease-out;
`

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,.1);
`

const NavbarContainer = styled.nav`
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: hidden;
    height: 64px;
    font-size: 0.75rem;
`
// Left navbar
const LeftContainer = styled.div`
    position: relative;
    flex: 1 0 auto;
    display: flex;
    margin: auto;
    align-items: center;
`

const LeftNav = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    padding: .5rem 0 .5rem;
    font-weight: 500;
    letter-spacing: .2px;
    text-transform: uppercase;
    white-space: nowrap;
`

const NavContent = styled.ul`
    position: absolute;
    z-index: 1000;
    display: flex;
    padding: 0;
    list-style: none;
    transition: all 1s cubic-bezier(.19,1,.22,1);
    margin-bottom: 0;

    @media only screen and (max-width: 500px) {
        margin-left: 15vw;
    }
`

const NavItems = styled.li`
    display: block;
    margin: 0;
    padding: 10px;
    line-height: 1.6em;
    text-transform: lowercase;
`

const LinkContainer = styled(Link)`
    position: relative;
    display: block;
    padding: 12px;
    color: ${props => props.theme.link};
    opacity: .8;
    transition: opacity .35s ease-in-out;
    box-shadow: none;
`

const homeActiveStyles = {
    color: `${props => props.theme.homeLink}`,
    boxShadow: 'none',
}

const HomeLink = styled(LinkContainer)` 
    box-shadow: none;
    &:hover {
        color: ${props => props.theme.homeLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
const AboutLink = styled(LinkContainer)`
    &:hover {
        color:  ${props => props.theme.aboutLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
const TagsLink = styled(LinkContainer)`
    &:hover {
        color:  ${props => props.theme.tagsLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
// Right navbar
const RightContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    height: 64px;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

const RightNav = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
`

const SocialIcons = styled.a`
    box-shadow: none;
    color: ${props => props.theme.link};
    padding: 0 10px;

    &:hover {
        cursor: pointer;
    }
`

const SocialButton = styled.span`
    margin: 10px;
    color: ${props => props.theme.link};
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

const Navbar = () => {

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
    const isActive = ({ isCurrent }) => {
        return isCurrent ? { 
            className: "active",
            style: {
                color: 'red',
            }
        } : {}
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <NavbarContainer>
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
                                                        : '',
                                                }
                                            }
                                        }}
                                    >
                                        Home
                                    </HomeLink>
                                </NavItems>
                                <NavItems>
                                    <AboutLink 
                                        to="/about/"
                                        getProps={({ isCurrent }) => {
                                            return {
                                                style: {
                                                    color: isCurrent ?  
                                                        `${theme.aboutLink}` 
                                                        : '',
                                                }
                                            }
                                        }}
                                    >
                                        About
                                    </AboutLink>
                                </NavItems>
                                <NavItems>
                                    <TagsLink 
                                        to={`/tags/`}
                                        getProps={({ isCurrent }) => {
                                            return {
                                                style: {
                                                    color: isCurrent ?  
                                                        `${theme.tagsLink}` 
                                                        : '',
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