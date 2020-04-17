import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TextContainer = styled.div`
  text-align: center;
`

const TitleContainer = styled.h2`

`

const ParagraphContainer = styled.p`

`

const IconContainer = styled.div`
  justify-content: center;
  display: flex;
  font-size: 25px;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
`

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <ImageContainer>
          <Img 
            fixed={data.file.childImageSharp.fixed}
          />
        </ImageContainer>
        <TextContainer>
          <TitleContainer>Not Found</TitleContainer>
          <ParagraphContainer>
            You just hit a route that doesn&#39;t exist... the sadness.
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
