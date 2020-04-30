import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const tagsPath = `${__PATH_PREFIX__}/tags/`
    let header

    if (location.pathname === rootPath || 
      location.pathname === blogPath || 
      location.pathname === tagsPath) {
      header = (
        <TitleContainer>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </TitleContainer>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <LayoutContainer
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </LayoutContainer>
        <HrContainer/>
        <Footer>
          © {new Date().getFullYear()}, Created by
          {` `}
          <LinkContainer href="/">tinashe88</LinkContainer>
        </Footer>
      </Wrapper>
    )
  }
}

const LayoutContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`

const TitleContainer = styled.h1`
  font-size: 3.9rem;
  line-height: 4.3rem;
  margin-bottom: 2.6rem;
  margin-top: 0px;

  @media only screen and (max-width: 800px) {
    font-size: 2.9rem;
    text-align: center;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  text-decoration: none;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const LinkContainer = styled.a`
  box-shadow: none;
`

const HrContainer = styled.hr`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 1px;
  background: #f1f1f1; 
`

export default Layout
