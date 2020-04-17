import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import BlogThumbnail from '../components/blog-thumbnail'

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
  margin-left: 1rem;
  padding: 1rem;
  min-width: 10px;
`

const CardTitleContainer = styled.h3`
  margin-top: 1.5rem;
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const author = data.site.siteMetadata.author
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <CardContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <CardBodyContainer key={node.fields.slug}>
                <CardTextContainer>
                  <CardTitleContainer>
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </CardTitleContainer>
                  <small>{node.frontmatter.date}</small>
                  {` `}
                  <small>{author}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </CardTextContainer>
                <BlogThumbnail/>
              </CardBodyContainer>
            )
          })}
        </CardContainer>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
        <br/>
        <hr/>
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
          }
        }
      }
    }
  }
`
