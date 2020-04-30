import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const BodyContainer = styled.div`
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

const TagHeader = styled.h2`
  @media only screen and (max-width: 800px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`

const LinkContainer = styled(Link)`
  box-shadow: none;
`

const BlogPostLink = styled(LinkContainer)`
  color: #19A974;

  &:hover {
    color: #000;
  }
`

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItems = styled.li`
  
`

const AllTagsLink = styled(LinkContainer)`
  display: flex;
  justify-content: center;
`

class Tags extends React.Component {
  render(){

    const { tag } = this.props.pageContext
    const { edges, totalCount } = this.props.data.allMdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={tag} />
          <BodyContainer>
            <TagHeader>{tagHeader}</TagHeader>
            <ListContainer>
              {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                  <ListItems key={slug}>
                    <BlogPostLink to={`blog${slug}`}>{title}</BlogPostLink>
                  </ListItems>
                )
              })}
            </ListContainer>
            <AllTagsLink to="/tags">All tags</AllTagsLink>
          </BodyContainer>
      </Layout> 
    )
  }
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`