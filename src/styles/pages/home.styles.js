import styled from 'styled-components'
import { Link } from "gatsby"

import Button from "../../components/button/button"

export const TitleContainer = styled.h1`
  margin-top: 0.5rem;
  color: ${props => props.theme.homeLink};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ButtonStyles = styled(Button)`
  margin-top: 35px;
  color: ${props => props.theme.homeLink};
`
