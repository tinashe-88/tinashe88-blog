import React from "react"

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import SideDrawer from '../side-drawer/side-drawer'
import BackDrop from '../backdrop/backdrop'

import {
  LayoutContainer,
  TitleContainer,
  Wrapper,
  HrContainer,
  LinkContainer
} from './layout.styles'

import { rhythm } from "../../utils/typography"

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

  exitClickHandler = () => {
    this.setState({sideDrawOpen: false})
  }

  render() {
    const { location, title, children } = this.props
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const aboutPath = `${__PATH_PREFIX__}/about/`
    const tagsPath = `${__PATH_PREFIX__}/tags/`
    let { sideDrawOpen } = this.state
    let header

    if (location.pathname === blogPath || 
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
        <SideDrawer 
          show={this.state.sideDrawOpen} 
          click={this.exitClickHandler}
        />
        {sideDrawOpen && <BackDrop click={this.exitClickHandler}/>}
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

export default Layout