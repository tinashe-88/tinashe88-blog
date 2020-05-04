import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faBars } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const MenuButton = props => {
  return (
    <ButtonContainer onClick={props.click}>
      <LinkContainer>
        <FontAwesomeIcon
          icon={faBars}
          aria-hidden="true"
          size="2x"
        />
      </LinkContainer>
    </ButtonContainer>
  )
}

const LinkContainer = styled.span`
  box-shadow: none;
  color: #333;
`

const ButtonContainer = styled.button`
  margin: 20px;
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 500px) {
    display: none;
  }
`

export default MenuButton