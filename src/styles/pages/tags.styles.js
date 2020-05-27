import styled from 'styled-components'

import { Link } from "gatsby"

export const TagsContainer = styled.div`
  text-align: center;
`

export const TitleContainer = styled.h2`
  color: ${props => props.theme.tagsTheme};
`

export const ListContainer = styled.ul`
  list-style: none;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ItemsContainer = styled.li`
  margin: 0 auto;
`

export const LinkConatiner = styled(Link)`
  box-shadow: none;
  color: ${props => props.theme.link};

  &:hover {
    color: ${props => props.theme.tagsTheme};
  }
`