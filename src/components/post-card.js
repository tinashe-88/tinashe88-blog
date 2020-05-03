import React from 'react'

import styled from 'styled-components'

const CardBodyContainer = styled.div`
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 10px solid slategray;

  &:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }
`

const PostCard = ({children, ...props}) => (
    <CardBodyContainer {...props}>
        {children}
    </CardBodyContainer>
)

export default PostCard