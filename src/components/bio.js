import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <ImageContainer
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <ParagraphContainer>
              Written by <strong>{author}</strong> who lives between 
              Zimbabwe & South Africa creating things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                Definitely give him a follow on Twitter
              </a>
            </ParagraphContainer>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const ImageContainer = styled(Image)`
  margin-bottom: 0px;
  border-radius: 100%;
  min-width: 50px;

  @media only screen and (max-width: 800px) {
    margin: 0 auto;
    margin-right: 0;
  }
`
const ParagraphContainer = styled.p`

  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`

export default Bio
