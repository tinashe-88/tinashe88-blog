import React from 'react'

import styled from 'styled-components'

const Badge = ({children, ...props}) => (
    <BadgeContainer>
        <TagsContainer {...props}>
            {children}
        </TagsContainer>
    </BadgeContainer>
)

const BadgeContainer = styled.div`
  width: 3.5rem;
  margin: 10px 6px 10px 0;
  padding: .3rem .3rem; /* rem unit */
  border-radius: 10%;
  font-size: 12px;
  text-align: center;
  color: #357EDD;
  background: #f1f1f1;
`

const TagsContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Badge