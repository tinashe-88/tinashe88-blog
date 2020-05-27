import React from 'react'

import {
  BackDropContainer
} from './backdrop.styles'

const BackDrop = props => (
  <BackDropContainer onClick={props.click}/>
)

export default BackDrop