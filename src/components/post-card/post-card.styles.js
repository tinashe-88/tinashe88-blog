import styled, { css } from 'styled-components'

const transitionLinks = css`
    transition: color .15s ease-out;
    transition: border-left .15s ease-out;
`

export const CardBodyContainer = styled.div`
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    transition: ${transitionLinks};
    border-left: 5px solid ${props => props.theme.blogLink};
  }
`

export const HrContainer = styled.hr`
  color: #f4f4f4;
  margin: 10px 0 10px;
  &:last-of-type {
    display: none;
  }
`