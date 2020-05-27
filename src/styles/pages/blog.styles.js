import styled from 'styled-components'

import { Link } from 'gatsby'

import Img from 'gatsby-image'

export const CardContainer = styled.div`
  text-align: left;
`

export const CardTextContainer = styled.div`
  margin-bottom: 7px;
  padding: 1rem;
  min-width: 10px;
  overflow: hidden;
`

export const CardTitleContainer = styled.h3`
  margin-top: .3rem;

  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
`

export const ParagraphContainer = styled.p`
  font-size : 12px;

  @media only screen and (max-width: 500px) {
    
  }
`

export const IconContainer = styled.div`
  justify-content: center;
  display: flex;
  padding: 25px;
  font-size: 25px;
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
  color: ${props => props.theme.link};

  &:hover {
    color: ${props => props.theme.blogLink};
    transition: 0.2s ease-in;
  }
`

export const BlogLink = styled(LinkContainer)`
  color: ${props => props.theme.link};

  &:hover {
    color: ${props => props.theme.blogLink};
    transition: 0.2s ease-in;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
`

export const ImageContents = styled(Img)`
    position: relative;
    height: 250px;
    width: 250px;
`