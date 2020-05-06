import React from 'react'

import styled, { css, ThemeProvider } from 'styled-components'

const theme = {
  link: '#333',
  blogLink: '#F65286',
}

const transitionLinks = css`
    transition: color .15s ease-out;
    transition: border-left .15s ease-out;
`

const CardBodyContainer = styled.div`
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    transition: ${transitionLinks};
    border-left: 5px solid ${theme.blogLink};
  }
`

const HrContainer = styled.hr`
  color: #f4f4f4;
  margin: 10px 0 10px;
`

const PostCard = ({children, ...props}) => (
  <ThemeProvider theme={theme}>
    <CardBodyContainer {...props}>
        {children}
    </CardBodyContainer>
    <HrContainer/>
  </ThemeProvider>
)

export default PostCard