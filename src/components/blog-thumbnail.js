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
            image: file(relativePath: {eq: "profile-pic.jpg"}) {
                id
                childImageSharp {
                  fixed(width: 500) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)
    console.log(data)

    return (
        <ImageContainer>
            <Img 
              fixed={data.image.childImageSharp.fixed}
              alt="blog thumbnail"
            />
        </ImageContainer>
    )
}

export default BlogThumbnail