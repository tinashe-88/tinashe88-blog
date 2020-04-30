import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from '../components/badge'
import SocialShare from '../components/share-social'
import Comments from '../components/comments'

import styled from 'styled-components'

import { rhythm, scale } from "../utils/typography"

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
`

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const ListItemsContainer = styled.div`

`

const PostTitle = styled.h2`

`

const PostMetadata = styled.span`
  margin-top: 1.25rem;
  display: block;
  margin-bottom: 1.75rem;
`

const HrContainer = styled.hr`
  margin-bottom: 1.75rem;
`

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
                  <LinkContainer to={`tags/${tag}`}>
                    <span>{tag}</span>
                  </LinkContainer>
                </Badge>
              )
            })}
          </TagsContainer>
        </PostMetadata>
        <MDXRenderer>{post.body}</MDXRenderer>
        <HrContainer />
        <Bio />
        <SocialShare />
        <Comments />
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
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
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
