import { NavLink } from 'react-static'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(min-width: 1300px) {
    justify-content: space-around;
  }
`

export const Nav = styled.nav`
  display: none;
  @media(min-width: 1022px) {
    display: block;
    padding-top: 40px;
  }
`

export const StyledLinkLeft = styled(NavLink)`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.3rem;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    margin-left: 20px;
    color: #1565c0;
    transition: all .20s ease-in;
    &:hover {
      border-top: 8px solid #eb1c24;
    }
    &.active {
      border-bottom: 8px solid #eb1c24;
      border-top: 0px solid #eb1c24;
    }  
    @media(min-width: 1300px) {
      margin-left:0;
      font-size: 1.6rem;
      padding-left: 20px;
      padding-right: 20px;
    }
`

export const StyledLinkRight = styled(NavLink)`
  transition: all .20s ease-in;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  color: #1565c0;
    &:hover {
      border-top: 8px solid #eb1c24;
    }
    &.active {
      border-bottom: 8px solid #eb1c24;
      border-top: 0px solid #eb1c24;
    }  

  @media(min-width: 1300px) {
    margin-right: 0;
    font-size: 1.6rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`
