import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import {
  TitleContainer,
  ButtonContainer,
  LinkContainer,
  ImageContainer,
  ButtonStyles
} from '../styles/pages/home.styles'

import { ThemeProvider } from 'styled-components'

const theme = {
  link: '#333',
  homeLink: '#2CAFDA',
}

const IndexPage = ({ location }) => {
  return (
    <ThemeProvider theme={theme}>
        <Layout 
          location={location} 
          style={{display:'none'}}
        >
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
            Holá {" "}
            <span role="img" aria-label="wave emoji">
              🤘
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

export default IndexPage
