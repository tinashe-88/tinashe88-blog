import React from "react"

import {
  ButtonWrapper
} from './button.styles'

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

export default Button
