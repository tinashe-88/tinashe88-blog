import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faPinterestSquare } from '@fortawesome/free-brands-svg-icons/faPinterestSquare'

import {
  Container,
  Headline,
  HeadlineTitle,
  SocialButtonsContainer,
  ButtonLink,
  LinkedinButton,
  TwitterButton,
  FacebookButton,
  PinterestButton
} from './share-social.styles'

const theme = {
    linkedin: '#0072b1',
    twitter: '#00acee',
    facebook: '#3b5998',
    pinterest: '#e60023',
}

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
                        href={
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