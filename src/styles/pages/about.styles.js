import styled from 'styled-components'

import { Link } from 'gatsby'

export const Container = styled.div`
  text-align: center;
`

export const TitleContainer = styled.h2`
  margin-top: 0.5rem;
  color: ${props => props.theme.aboutTheme};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

export const ParagraphContainer = styled.p`
  text-align: left;
`