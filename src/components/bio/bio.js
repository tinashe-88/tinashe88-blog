import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Container,
  ImageContainer,
  ParagraphContainer,
} from './bio.styles'

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

export default Bio
