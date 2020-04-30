import React from 'react'

import styled from 'styled-components'

const CardBodyContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 1rem auto;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left: 10px solid slategray;
`

const PostCard = ({children, ...props}) => (
    <CardBodyContainer {...props}>
        {children}
    </CardBodyContainer>
)

export default PostCard