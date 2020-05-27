import styled from "styled-components"
import Image from "gatsby-image"

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled(Image)`
  margin-bottom: 0px;
  border-radius: 100%;
  min-width: 50px;
  margin-right: 0.875rem;

  @media only screen and (max-width: 800px) {
    margin: auto;
  }
`
export const ParagraphContainer = styled.p`

  @media only screen and (max-width: 800px) {
    margin-top: 20px;
  }
`
