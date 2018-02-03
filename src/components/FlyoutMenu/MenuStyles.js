import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  float: right;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0;
  overflow: visible;
  margin: 30px;
  transition-property: transform;
  transition-duration: .5s;
  margin-top: 5px;
  margin-left: -130px;
  margin-right: 0px;
  &:hover { cursor: pointer; transform: scale(1.2, 1.2); }
  @media (min-width: 768px) { margin-top: 20px; margin-bottom: 20px;
    margin-left: -130px;
    margin-right: 50px;
}
  @media (min-width: 1022px) { display: none; }
`;

export const MenuLines = styled.span`
  position: relative;
  display: inline-block;
  width: 47px;
  height: 37px;
  vertical-align: middle;
  span {
    position: absolute;
    display: block;
    height: 6px;
    width: 70%;
  }
  span:nth-child(1) { top: 0; background: #eb1c24; }
  span:nth-child(2) { top: 10px; background-color: #1565c0; }
  span:nth-child(3) { top: 20px; background: #eb1c24; }

  @media(min-width: 768px) {
    span { height: 8px !important; width: 100% !important; }
    span:nth-child(2) { top: 15px !important; }
    span:nth-child(3) { top: 30px !important; }
  }
`;

export const Bar = styled.span`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
`;

export const StyledLink = styled(NavLink)`
  padding: 28px 28px 5px 28px;
  text-align: center;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: .22rem;
  color: white;
  text-decoration: none;
  transition: all .20s ease-in;
  margin: auto;
  font-variant: small-caps;
  border-color: #1565c0;
  &:hover { transform: scale3d(1.2,1.3,1); }
  &.active { border-bottom: 8px solid #eb1c24; }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  text-align: center;
  justify-content: space-around;
`;

export const Image = styled.img`
  transition: all .25s ease-in;
  max-height: 6em;
  margin: 0 auto !important;
  @media (min-width: 500px) { height: 8em; }
  @media (min-width: 768px) { height: 11em; }
`;

export const theme = {
  main: '#c62828'
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1565c0;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  z-index: 1000;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  &.hide { transform: translate3d(-100vw, 0, 0); }
  &.show { transform: translate3d(0vw, 0, 0); }
`;