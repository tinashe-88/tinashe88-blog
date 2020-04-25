import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'

import styled from 'styled-components'

const ImageContainer = styled.div`
    position: relative;
    right: 0;
    left: 0;
`

const BlogThumbnail = () => {
    const data = useStaticQuery(graphql`
        query Images {
          image: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "posts"}}) {
            edges {
              node {
                id
                name
                relativePath
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                }
                }
              }
            }
          }   
        }
    `)

    return (
        <ImageContainer>
            {
              data.image.edges.map(edge => (
                console.log(edge)
              ))
            }
          
        </ImageContainer>
    )
}

export default BlogThumbnail