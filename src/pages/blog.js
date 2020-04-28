import React from "react"
import { Link, graphql } from "gatsby"

import Badge from '../components/badge'
import styled from 'styled-components'

import Img from 'gatsby-image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const CardContainer = styled.div`
  text-align: left;
`

const CardBodyContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 10px solid slategray;
`

const CardTextContainer = styled.div`
margin-bottom: 14px;
  padding: 1rem;
  min-width: 10px;
  overflow: hidden;
`

const CardTitleContainer = styled.h3`
  margin-top: .5rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`

const ParagraphContainer = styled.p`
  font-size : 10px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

const IconContainer = styled.div`
  justify-content: center;
  display: flex;
  padding: 25px;
  font-size: 25px;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
`

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
`

const ImageContents = styled(Img)`
    position: relative;
    height: 250px;
    width: 250px;
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <CardContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const thumbnail = node.frontmatter.image
            return (
              <CardBodyContainer key={node.fields.slug}>
                <CardTextContainer>
                  <CardTitleContainer>
                    <LinkContainer
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </LinkContainer>
                  </CardTitleContainer>
                  <small>{node.frontmatter.date}</small>
                  {` `}
                  <TagContainer>
                    {node.frontmatter.tags.map((tag, i) => {
                      return (
                        <Badge key={i}>
                          <LinkContainer to={`tags/${tag}`}>
                            {tag}
                          </LinkContainer>
                        </Badge>
                      )
                    })}
                  </TagContainer>
                  
                  <ParagraphContainer
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </CardTextContainer>
                <ImageContainer>
                  {
                    <ImageContents
                      fluid={thumbnail.childImageSharp.fluid}
                    />
                  }
                </ImageContainer>
              </CardBodyContainer>
            )
          })}
        </CardContainer>
        <IconContainer>
          <LinkContainer to="/">
            <FontAwesomeIcon icon={faHome}/>
          </LinkContainer>
        </IconContainer>
      </Layout>
    )
  }
}

export default Blog


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            image {
              id
              childImageSharp {
                fluid(maxWidth: 250, maxHeight: 250){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
