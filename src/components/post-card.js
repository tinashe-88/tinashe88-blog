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
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {
    
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    transition: ${transitionLinks};
    border-left: 5px solid ${theme.blogLink};
  }
`

const PostCard = ({children, ...props}) => (
  <ThemeProvider theme={theme}>
    <CardBodyContainer {...props}>
        {children}
    </CardBodyContainer>
  </ThemeProvider>
)

export default PostCard