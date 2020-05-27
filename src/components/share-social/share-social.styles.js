import styled from 'styled-components'

export const Container = styled.div`
    padding-bottom: 20px;
    text-align: center;
`

export const Headline = styled.div`
    
`

export const HeadlineTitle = styled.h3`
    font-size: 20px;
`

export const SocialButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: rgba(256,256,256,0.5);
    text-align: center;
`

const SocialIcon = styled.span`
    display: inline-block;
    margin: 20px;
    font-size: 12px;
    width: 60px;

    &:hover {
        transition: 0.17s ease-in;
        cursor: pointer;
    }
`

export const ButtonLink = styled.a`
    text-decoration: none;
    box-shadow: none;
    color: #333;
`

export const LinkedinButton = styled(SocialIcon)`
    
    &:hover {
        color: ${props => props.theme.linkedin};
    }
`

export const TwitterButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.twitter};
    }
`

export const FacebookButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.facebook};
    }
`

export const PinterestButton = styled(SocialIcon)`
    &:hover {
        color: ${props => props.theme.pinterest};
    }
`