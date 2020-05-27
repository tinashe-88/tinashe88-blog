import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const transitionLinks = css`
    transition: box-shadow .37s ease-in;
    transition: color .15s ease-out;
`

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(240,240,240,.1);
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,.5);
    background: #eee;
`

export const NavbarContainer = styled.nav`
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow-y: hidden;
    height: 64px;
    font-size: 0.75rem;
`
// Left navbar
export const LeftContainer = styled.div`
    position: relative;
    flex: 1 0 auto;
    display: flex;
    margin: auto;
    align-items: center;
`

export const LeftNav = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    padding: .5rem 0 .5rem;
    font-weight: 500;
    letter-spacing: .2px;
    text-transform: uppercase;
    white-space: nowrap;
    margin-left: 30px;

    @media only screen and (max-width: 800px) {
        margin-left: 0;
    }
`

export const NavContent = styled.ul`
    position: absolute;
    z-index: 1000;
    display: flex;
    padding: 0;
    list-style: none;
    transition: all 1s cubic-bezier(.19,1,.22,1);
    margin-bottom: 0;
    
    @media only screen and (max-width: 800px) {
        /* transform: translateX(-50%);
        left: 50%;
        margin-left: 0; */
        display: none;
    }
`

export const NavItems = styled.li`
    display: block;
    margin: 0;
    padding: 10px;
    line-height: 1.6em;
    text-transform: lowercase;
`

const LinkContainer = styled(Link)`
    position: relative;
    display: block;
    padding: 12px;
    color: ${props => props.theme.link};
    opacity: .8;
    transition: ${transitionLinks};
    box-shadow: none;
`
// Right Links
export const HomeLink = styled(LinkContainer)` 
    box-shadow: none;
    &:hover {
        color: ${props => props.theme.homeLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
export const BlogLink = styled(LinkContainer)` 
    box-shadow: none;
    &:hover {
        color: ${props => props.theme.blogLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
export const AboutLink = styled(LinkContainer)`
    &:hover {
        color:  ${props => props.theme.aboutLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
export const TagsLink = styled(LinkContainer)`
    &:hover {
        color:  ${props => props.theme.tagsLink};
        box-shadow: 0px 2px rgba(0,0,0,.1);
    }
`
// Right navbar
export const RightContainer = styled.div`
    flex: 0 1 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    height: 64px;
    
    @media only screen and (max-width: 800px) {
        display: none;
    }
`

export const RightNav = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`

export const SocialIcons = styled.a`
    box-shadow: none;
    color: ${props => props.theme.link};
    padding: 0 10px;

    &:hover {
        cursor: pointer;
    }
`

const SocialButton = styled.span`
    margin: 10px;
    color: ${props => props.theme.link};
`

export const GithubButton = styled(SocialButton)`
    &:hover {
        color: ${props => props.theme.github};
        transition: ${transitionLinks};
    }
`

export const TwitterButton = styled(SocialButton)`
    &:hover {
        color: ${props => props.theme.twitter};
        transition: ${transitionLinks};
    }
`

export const InstagramButton = styled(SocialButton)`
    &:hover {
        color: ${props => props.theme.instagram};
        transition: ${transitionLinks};
    }
`