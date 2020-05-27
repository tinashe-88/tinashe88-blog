import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import {
  ImageContainer,
  TextContainer,
  TitleContainer,
  ParagraphContainer,
  IconContainer,
  LinkContainer
} from '../styles/pages/404.styles'

const NotFoundPage = ({ data, location }) => {
  const image = data.file
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout 
      location={location} 
      title={siteTitle}
    >
      <SEO title="404: Not Found" />
      <ImageContainer>
        <Img 
          fixed={image.childImageSharp.fixed}
        />
      </ImageContainer>
      <TextContainer>
        <TitleContainer>Not Found</TitleContainer>
        <ParagraphContainer>
          It looks like you've hit a page that doesn't
          exist.
        </ParagraphContainer>
      </TextContainer>
      <IconContainer>
        <LinkContainer to="/">
          <FontAwesomeIcon icon={faHome}/>
        </LinkContainer>
      </IconContainer>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "404-img.png"}) {
      id
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
