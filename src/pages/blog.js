import React from "react"
import { graphql } from "gatsby"

import Badge from '../components/badge/badge'
import PostCard from '../components/post-card/post-card'

import { ThemeProvider } from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import {
  CardContainer,
  CardTextContainer,
  CardTitleContainer,
  ParagraphContainer,
  IconContainer,
  LinkContainer,
  BlogLink,
  TagContainer,
  ImageContainer,
  ImageContents,
} from '../styles/pages/blog.styles'
// import { rhythm } from "../utils/typography"

const theme = {
  blogLink: '#F65286',
  link: '#333',
}

const Blog = ({ data,location }) => {    
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    console.log(location)
    return (
      <ThemeProvider theme={theme}>
        <Layout location={location} title={siteTitle}>
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
      </ThemeProvider>
    )
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
