import React from "react"
import { Link } from "gatsby"

import Navbar from './navbar'
import Footer from './footer'
import SideDrawer from './side-drawer'
import BackDrop from './backdrop'

import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  state = {
    sideDrawOpen: false,
  }

  menuButtonToggle = () => {
    this.setState((prevState) => {
      return {
        sideDrawOpen: !prevState.sideDrawOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawOpen: false})
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const tagsPath = `${__PATH_PREFIX__}/tags/`
    let { sideDrawOpen } = this.state
    let header

    if (location.pathname === rootPath || 
      location.pathname === blogPath || 
      location.pathname === aboutPath || 
      location.pathname === tagsPath) {
      header = (
        <TitleContainer>
          <LinkContainer
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </LinkContainer>
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
          <LinkContainer
            to={`/blog/`}
          >
            {title}
          </LinkContainer>
        </h3>
      )
    }
    return (
      <Wrapper style={{height: '100%'}}>
        <Navbar clickHandler={this.menuButtonToggle}/>
        <SideDrawer show={this.state.sideDrawOpen}/>
        {sideDrawOpen && <BackDrop click={this.backdropClickHandler}/>}
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
        <Footer />
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

const HrContainer = styled.hr`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 1px;
  background: #f1f1f1; 
`

const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

export default Layout