import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import styled, { css } from "styled-components"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
          siteMetadata {
            siteUrl
            social {
              twitter
              instagram
              github
            }
          }
      }
    }
  `)

  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <FooterText>
      © {new Date().getFullYear()}, Created by
      {` `}
      <LinkContainer href={siteUrl}>tinashe88</LinkContainer>
    </FooterText>
  )
}


const transitionAnimation = css`
  transition: color .5s ease-in-out;
`

const FooterText = styled.footer`
  text-align: center;
  margin: 24px;
  color: #ccc;
`

const LinkContainer = styled.a`
  box-shadow: none;
  color: #eee;
  transition: ${transitionAnimation};

  &:hover {
    color: #ccc;
  }
`

export default Footer