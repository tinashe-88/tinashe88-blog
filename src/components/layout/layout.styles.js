import styled from "styled-components"
import { Link } from "gatsby"

export const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  ul {
    padding: 0 50px;

    @media only screen and (max-width: 500px) {
      padding: 0;
    }
  }
`

export const TitleContainer = styled.h1`
  font-size: 3.9rem;
  line-height: 4.3rem;
  margin-bottom: 2.6rem;
  margin-top: 0px;

  @media only screen and (max-width: 800px) {
    font-size: 2.9rem;
    text-align: center;
  }
`

export const Wrapper = styled.div`
  min-height: 100vh;
  text-decoration: none;
`

export const HrContainer = styled.hr`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  height: 1px;
  background: #f1f1f1; 
`

export const LinkContainer = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`