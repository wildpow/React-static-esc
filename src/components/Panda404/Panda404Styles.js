import styled, {keyframes } from 'styled-components';

const FadeIn404 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Main = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border: 2px solid black;
  transition: all .2s ease-in;
  text-align: center;
  justify-content: center;
  animation-duration: .5s;
  animation-name: ${FadeIn404};
  animation-fill-mode: both;
`;

export const Img = styled.img`
  margin: auto;
  max-width: 20rem;
  transition: all .2s ease-in;
  @media(min-width: 800px) { max-width: 40rem; }
`;

export const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  letter-spacing: .2rem;
`;
