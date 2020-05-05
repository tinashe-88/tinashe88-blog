import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s cubic-bezier(0.28, -0.55, 0.65, 0.75);

  background: ${props => props.props.background || "black"};
  color: ${props => props.props.color || "#F4F4F4"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    color: ${props => props.props.color || "white"};
    background: ${props => props.props.background || "#001B44"};
    box-shadow: 0 0 1px #001B44, 0 0 2px #333, 0 0 2px #333;
    border-radius: 1px;
  }
`

export default Button
