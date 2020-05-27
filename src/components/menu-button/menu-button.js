import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faBars } from '@fortawesome/free-solid-svg-icons'

import {
  LinkContainer,
  ButtonContainer
} from './menu-button.styles'

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

export default MenuButton