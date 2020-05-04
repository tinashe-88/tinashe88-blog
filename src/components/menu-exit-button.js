import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

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
const ButtonContainer = styled.button`
  
`

export default MenuExitButton