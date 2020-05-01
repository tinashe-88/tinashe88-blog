import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Badge from '../components/badge'

import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

import styled, { ThemeProvider } from 'styled-components'
import { rhythm } from "../utils/typography"

const theme = {
  tagsTheme: '#FF982B',
  link: '#333',
}

const TagsContainer = styled.div`
  text-align: center;
`

const TitleContainer = styled.h2`
  color: ${props => props.theme.tagsTheme};
`

const ListContainer = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ItemsContainer = styled.li`
  margin: 0 auto;
`

const LinkConatiner = styled(Link)`
  box-shadow: none;
  color: ${props => props.theme.link};

  &:hover {
    color: ${props => props.theme.tagsTheme};
  }
`
class TagsPage extends React.Component {

    render(){
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const tags = data.allMdx.group

        return (
          <ThemeProvider theme={theme}>

            <Layout location={this.props.location} title={siteTitle}>
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