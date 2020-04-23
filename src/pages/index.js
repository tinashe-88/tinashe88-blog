import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import styled from 'styled-components'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "tinashe88 blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `javascript`, `react`, `node`, `tinashe88`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <ButtonContainer>
          <LinkContainer to="/blog/" style={{textDecoration:"none"}}>
            <Button marginTop="35px">The Blog</Button>
          </LinkContainer>
        </ButtonContainer>
      </Layout>
    )
  }
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

export default IndexPage
