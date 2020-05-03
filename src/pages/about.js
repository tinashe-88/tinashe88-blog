import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styled, { ThemeProvider } from 'styled-components'

class AboutPage extends React.Component {
    render(){
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return (
            <ThemeProvider theme={theme}>
                <Layout location={this.props.location} title={siteTitle}>
                    <SEO title="about"/>
                    <Container>
                        <TitleContainer>
                            About
                        </TitleContainer>
                        <ParagraphContainer>
                        Welcome to my blog site. I'm quite excited to 
                        have this tool
                        in order to further my understanding of how certain 
                        things work.
                        </ParagraphContainer>
                        <ParagraphContainer>
                        This will be my platform to share, with you, my interests
                        and learning experiences ranging from web development,
                        travel, gaming and sports.
                        </ParagraphContainer>
                        <ParagraphContainer>
                          Thanks for being here!
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
}

const theme = {
    link: '#333',
    aboutTheme: '#19A974',
}

const Container = styled.div`
    text-align: center;
`

const TitleContainer = styled.h2`
  margin-top: 0.5rem;
  color: ${props => props.theme.aboutTheme};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

const ParagraphContainer = styled.p`
    text-align: left;
`

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