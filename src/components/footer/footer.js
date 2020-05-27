import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import {
  FooterText,
  LinkContainer
} from './footer.styles'

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

export default Footer