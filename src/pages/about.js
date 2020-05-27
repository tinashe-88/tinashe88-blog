import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Button from "../components/button/button"
import { ThemeProvider } from 'styled-components'

import {
  Container,
  TitleContainer,
  ButtonContainer,
  LinkContainer,
  ParagraphContainer
} from '../styles/pages/about.styles'

const theme = {
  link: '#333',
  aboutTheme: '#19A974',
}

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} title={siteTitle}>
        <SEO title="about"/>
        <Container>
          <TitleContainer>
              About
          </TitleContainer>
          <ParagraphContainer>
            My name's Tinashe and I'm from Harare, Zimbabwe but I
            grew up inbetween Johannesburg and Cape Town, South
            attempting to figure out what makes the web go round.
            Considered to be a creative and someone who has a 
            natural talent for understanding how certain things 
            work.
          </ParagraphContainer>
          <ParagraphContainer>
            In my spare time I like to play as much sports as
            I possibly can. My preferred sport are Football
            (European), Athletics, Rugby, Hockey and others.
            Watcthing live games is also something I do.
          </ParagraphContainer>
          <ParagraphContainer>
            Music makes my life just that much better. I love
            it so much that I create it whenever I find the time.
            I am, however a qualified sound engineer so there's 
            that too. Anything to do with sound and I'm a happy
            human.
          </ParagraphContainer>
          <ButtonContainer>
            <LinkContainer to="/blog/">
              <Button marginTop="35px">The Blog</Button>
            </LinkContainer>
          </ButtonContainer>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query AboutQuery{
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export default AboutPage