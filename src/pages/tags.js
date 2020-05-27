import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo/seo"
import Layout from "../components/layout/layout"
import Badge from '../components/badge/badge'

import kebabCase from "lodash/kebabCase"

import { graphql } from "gatsby"

import { ThemeProvider } from 'styled-components'
import { rhythm } from "../utils/typography"

import {
  TagsContainer,
  TitleContainer,
  ListContainer,
  ItemsContainer,
  LinkConatiner
} from '../styles/pages/tags.styles'

const theme = {
  tagsTheme: '#FF982B',
  link: '#333',
}

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMdx.group

  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} title={siteTitle}>
        <SEO title="tags"/>
        <TagsContainer>
          <TitleContainer>Tags</TitleContainer>
          <ListContainer>
            {tags.map(tag => (
              <ItemsContainer key={tag.fieldValue}>
                <Badge
                  style={{width: rhythm(3)}}
                >
                  <LinkConatiner 
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </LinkConatiner>
                </Badge>
              </ItemsContainer>
            ))}
          </ListContainer>
        </TagsContainer>
      </Layout>
    </ThemeProvider>
  )
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