import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import styled, { ThemeProvider } from 'styled-components'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "tinashe88 blog"

    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `javascript`, `react`, `node`, `tinashe88`]}
          />
          <ImageContainer>
            <img 
              style={{ margin: 0, width: "500px", height: "500px" }} 
              src="./blog-logo.svg" 
              alt="blog logo" 
            />
          </ImageContainer>
          <TitleContainer>
            Hey people{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </TitleContainer>
          <p>
            Welcome to my blog site. I'm quite excited to have this tool
            in order to further my understanding of how certain things work.
          </p>
          <p>
            This will be my platform to share, with you, my interests
            and learning experiences ranging from web development, travel, 
            gaming and sports.
          </p>
          <p>Thanks for being here!</p>
          <ButtonContainer>
            <LinkContainer to="/blog/">
              <ButtonStyles>The Blog</ButtonStyles>
            </LinkContainer>
          </ButtonContainer>
        </Layout>
      </ThemeProvider>
    )
  }
}

const theme = {
  link: '#333',
  homeLink: '#2CAFDA',
}

const TitleContainer = styled.h1`
  margin-top: 0.5rem;
  color: ${props => props.theme.homeLink};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonStyles = styled(Button)`
  margin-top: 35px;
  color: ${props => props.theme.homeLink};
`

export default IndexPage
