import styled from 'styled-components'

import { Link } from 'gatsby'

export const BodyContainer = styled.div`
  @media only screen and (max-width: 800px) {
    text-align: center;
  }
`

export const TagHeader = styled.h2`
  @media only screen and (max-width: 800px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
`

export const BlogPostLink = styled(LinkContainer)`
  color: #19A974;

  &:hover {
    color: #000;
  }
`

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 500px) {
    margin-left: 0;
  }
`

export const ListItems = styled.li`
  
`

export const AllTagsLink = styled(LinkContainer)`
  display: flex;
  justify-content: center;
`