import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

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
  margin-right: 0.875rem;

  @media only screen and (max-width: 800px) {
    margin: auto;
  }
`
const ParagraphContainer = styled.p`

  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`

export default Bio
