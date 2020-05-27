import React from 'react'

import { ThemeProvider } from 'styled-components'

import {
  CardBodyContainer,
  HrContainer
} from './post-card.styles'

const theme = {
  link: '#333',
  blogLink: '#F65286',
}

const PostCard = ({children, ...props}) => (
  <ThemeProvider theme={theme}>
    <CardBodyContainer {...props}>
        {children}
    </CardBodyContainer>
    <HrContainer/>
  </ThemeProvider>
)

export default PostCard