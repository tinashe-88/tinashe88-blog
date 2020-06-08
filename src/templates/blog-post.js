import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Badge from '../components/badge/badge'
import SocialShare from '../components/share-social/share-social'
import Comments from '../components/comments/comments'
import Bio from "../components/bio/bio"

import { scale } from "../utils/typography"

import {
  TagsContainer,
  LinkContainer,
  ListContainer,
  ListItemsContainer,
  PostTitle,
  PostMetadata,
  HrContainer,
  PostImage,
  ImageContainer,
  PaginationContainer
} from '../styles/templates/blog-post.styles'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostMetadata
          style={{
            ...scale(-1 / 5)
          }}
        >
          {post.frontmatter.author}
          {post.frontmatter.date}
          <TagsContainer>
            {post.frontmatter.tags.map(tag => {
              return (
                <Badge key={tag}>
                  <LinkContainer 
                    to={`tags/${tag}/`}
                  >
                    <span>{tag}</span>
                  </LinkContainer>
                </Badge>
              )
            })}
          </TagsContainer>
        </PostMetadata>
        <ImageContainer>
          <PostImage
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </ImageContainer>
        <MDXRenderer>{post.body}</MDXRenderer>
        <HrContainer />
        <Bio/>
        <SocialShare />
        <Comments />
        <PaginationContainer>
          <ListContainer>
            <ListItemsContainer>
              {previous && (
                <LinkContainer to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </LinkContainer>
              )}
            </ListItemsContainer>
            <ListItemsContainer>
              {next && (
                <LinkContainer to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </LinkContainer>
              )}
            </ListItemsContainer>
          </ListContainer>
        </PaginationContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 100)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
