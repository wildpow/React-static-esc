import styled, { keyframes } from 'styled-components';
import { Link } from 'react-static';


const BrandsFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Main = styled.div`
  display: flex;  
  flex-direction: column;
  text-align: center;
  animation-duration: .5s;
  animation-name: ${BrandsFadeIn};
  animation-fill-mode: both;
  @media(min-width: 1022px) { flex-direction: row; justify-content: center; }
`;

export const TempurImg = styled.img`
  width: 22rem;
  align-self: center;
  padding-top: 22px;
  @media(min-width: 768px) { max-width: 25rem; }
  @media(min-width: 1022px) { max-width: 20rem; margin: auto; padding-top: 0px; }
`;

export const StearnsImg = styled.img`
  align-self: center;
  width: 17rem;
  padding-top: 30px;
  padding-bottom: 15px;
  @media(min-width: 1022px) { max-width: 15rem; padding-top: 50px; }
`;

export const SealyImg = styled.img`
  align-self: center;
  width: 12rem;
  height: 12rem;
  padding-top: 20px;
  padding-bottom: 15px;
  @media(min-width: 1022px) {
    width: 10rem;
    height: 10rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;


export const MainText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

export const Footer = styled.p`
  background-color: ${props => props.blue ? '#1565c0' : '#eb1c24'};
  margin-bottom: 0;
  padding: 10px 0 10px 0;
  color: white;
  border-top: 2px solid black;
  font-family: 'Roboto', sans-serif;
  letter-spacing: .12rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
`;
export const StyledLink = styled(Link)`
      text-decoration: none;
      flex-basis: 100%;
      color: black;
      border: 2px solid black;
      box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
      border-top-left-radius: .11rem;
      border-top-right-radius: .11rem;
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      display: flex;
      transition: all .25s ease-in-out;
      &:hover { transform: scale(1.01); }
      @media(min-width: 1022px) {
        margin: 0 auto;
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
      }
`;
export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(min-width: 1022px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
  }
`
export const StearnsWrapper = StyledLink.extend`
  @media(min-width: 1022px) { margin-right: 10px; margin-left: 10px; }
`;