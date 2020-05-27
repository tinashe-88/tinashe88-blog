import styled, { css } from "styled-components"

const transitionAnimation = css`
  transition: color .5s ease-in-out;
`

export const FooterText = styled.footer`
  text-align: center;
  margin: 24px;
  color: #ccc;
`

export const LinkContainer = styled.a`
  box-shadow: none;
  color: #eee;
  transition: ${transitionAnimation};

  &:hover {
    color: #ccc;
  }
`