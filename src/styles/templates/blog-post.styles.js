import styled from 'styled-components'

import { Link } from 'gatsby'

import Img from 'gatsby-image'

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
`

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

export const ListItemsContainer = styled.div`

`

export const PostTitle = styled.h2`

`

export const PostMetadata = styled.span`
  margin-top: 1.25rem;
  display: block;
  margin-bottom: 1.75rem;
`

export const HrContainer = styled.hr`
  margin-bottom: 1.75rem;
`

export const PostImage = styled(Img)`
    position: relative;
    margin: 10px 0 40px 0;
`

export const ImageContainer = styled.div`
    
`