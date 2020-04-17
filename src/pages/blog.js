import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
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
  margin-top: .5rem;
`

const TagsContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BadgeContainer = styled.div`
  max-width: 3.5rem;
  max-height: 2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: .3rem .3rem; /* rem unit */
  border-radius: 10%;
  font-size: 12px;
  text-align: center;
  background: #1779ba;
  color: #fefefe;
`

const ParagraphContainer = styled.p`
  font-size : 10px;
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
                  <BadgeContainer>
                    <TagsContainer>{node.frontmatter.tags}</TagsContainer>
                  </BadgeContainer>
                  
                  <ParagraphContainer
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
          }
        }
      }
    }
  }
`
