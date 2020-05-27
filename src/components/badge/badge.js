import React from 'react'

import {
  BadgeContainer,
  TagsContainer
} from './badge.styles'

const Badge = ({children, ...props}) => (
    <BadgeContainer>
        <TagsContainer {...props}>
            {children}
        </TagsContainer>
    </BadgeContainer>
)

export default Badge