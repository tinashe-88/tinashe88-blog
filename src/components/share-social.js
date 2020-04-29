import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faPinterestSquare } from '@fortawesome/free-brands-svg-icons/faPinterestSquare'


const theme = {
    linkedin: '#0072b1',
    twitter: '#00acee',
    facebook: '#3b5998',
    pinterest: '#e60023',
}

const Container = styled.div`
    padding-bottom: 20px;
    text-align: center;
`

const Headline = styled.div`
    
`

const HeadlineTitle = styled.h3`
    font-size: 20px;
`

const SocialButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgba(256,256,256,0.5);
    text-align: center;
`

const SocialIcon = styled.span`
    display: inline-block;
    margin: 20px;
    font-size: 12px;
    width: 60px;

    &:hover {
        transition: 0.17s ease-in;
        cursor: pointer;
    }
`

const ButtonLink = styled.a`
    text-decoration: none;
    box-shadow: none;
    color: #333;
`

const LinkedinButton = styled(SocialIcon)`
    
    &:hover {
        color: ${props => props.theme.linkedin};
    }
`

const TwitterButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.twitter};
    }
`

const FacebookButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.facebook};
    }
`

const PinterestButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.pinterest};
    }
`

const SocialShare = () => {
    const data  = useStaticQuery(graphql`
        query {
            site {
              siteMetadata {
                siteUrl
                social {
                  twitter
                }
              }
            }
            mdx(fields: {slug: {}}) {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                }
            }
        }          
    `)
    const siteMeta = data.site.siteMetadata
    const mdxData = data.mdx

    const baseUrl = siteMeta.siteUrl
    const socialHandle = siteMeta.social
    const slugUrl  = mdxData.fields.slug
    const blogTitle = mdxData.frontmatter.title
    const description = mdxData.frontmatter.description

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Headline>
                    <HeadlineTitle>Share this:</HeadlineTitle>
                </Headline>
                <SocialButtonsContainer>
                    <ButtonLink
                        href    ={
                            "https://www.facebook.com/sharer/sharer.php?u="
                            + baseUrl 
                        }
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookButton>
                            <FontAwesomeIcon 
                                icon={faFacebookSquare}
                                aria-hidden="true"
                                size="3x"
                            />
                        </FacebookButton>
                    </ButtonLink>
                    <ButtonLink
                        href={"http://pinterest.com/pin/create/button/?url=" 
                        + baseUrl
                        }
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <PinterestButton>
                            <FontAwesomeIcon 
                                icon={faPinterestSquare}
                                aria-hidden="true"
                                size="3x"
                            />
                        </PinterestButton>
                    </ButtonLink>
                    <ButtonLink
                        href={
                            "https://twitter.com/share/?url=" 
                            + baseUrl 
                            + slugUrl 
                            + "&text=" 
                            + blogTitle
                            + "&via" 
                            + socialHandle.twitter
                        }
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterButton>
                            <FontAwesomeIcon 
                                icon={faTwitterSquare}
                                aria-hidden="true"
                                size="3x"
                            />
                        </TwitterButton>
                    </ButtonLink>
                    <ButtonLink
                        href={
                            "http://www.linkedin.com/shareArticle?mini=true&url="
                            + baseUrl
                            + slugUrl 
                            + "&title=" 
                            + blogTitle
                            + "&summary="
                            + description
                        }
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinButton>
                            <FontAwesomeIcon 
                                icon={faLinkedinIn}
                                aria-hidden="true"
                                size="3x"
                            />
                        </LinkedinButton>
                    </ButtonLink>
                </SocialButtonsContainer>
            </Container>
        </ThemeProvider>
    )
}

export default SocialShare