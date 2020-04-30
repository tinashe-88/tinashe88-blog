import React from "react"
import { Link, graphql } from "gatsby"

import Badge from '../components/badge'
import PostCard from '../components/post-card'

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

const CardTextContainer = styled.div`
  margin-bottom: 7px;
  padding: 1rem;
  min-width: 10px;
  overflow: hidden;
`

const CardTitleContainer = styled.h3`
  margin-top: .3rem;

  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
`

const ParagraphContainer = styled.p`
  font-size : 12px;

  @media only screen and (max-width: 500px) {
    
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
  color: #333;

  &:hover {
    color: #d1d1d1;
    transition: 0.2s ease-in;
  }
`

const BlogLink = styled(LinkContainer)`
  color: #111;

  &:hover {
    color: #19A974;
    transition: 0.2s ease-in;
  }
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
              <PostCard key={node.fields.slug}>
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
                          <BlogLink to={`tags/${tag}`}>
                            {tag}
                          </BlogLink>
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
              </PostCard>
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
