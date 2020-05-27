import styled from 'styled-components'

export const LinkContainer = styled.span`
  box-shadow: none;
  color: #333;
`

export const ButtonContainer = styled.button`
  margin: 20px;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 500px) {
    display: none;
  }
`