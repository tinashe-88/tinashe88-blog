import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {
  ButtonContainer
} from './menu-exit-button.styles'

const MenuExitButton = (props) => {
  return (
    <ButtonContainer onClick={props.onClick}>
      <FontAwesomeIcon 
        icon={faTimes}
        aria-hidden="true"
        size="1x"
      />
    </ButtonContainer>
  )
}

export default MenuExitButton