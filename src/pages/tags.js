import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/layout"

import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

import styled from 'styled-components'

const TagsContainer = styled.div`
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

const TitleContainer = styled.h2`

`

const ListContainer = styled.ul`
    list-style: none;
`

const ItemsContainer = styled.li`

`
class TagsPage extends React.Component {

    render(){
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const tags = data.allMdx.group

        return (
            <Layout location={this.props.location} title={siteTitle}>
              <SEO title="tags"/>
              <TagsContainer>
                <TitleContainer>Tags</TitleContainer>
                <ListContainer>
                  {tags.map(tag => (
                    <ItemsContainer key={tag.fieldValue}>
                      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </ItemsContainer>
                  ))}
                </ListContainer>
              </TagsContainer>
            </Layout>
          )
    }
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`