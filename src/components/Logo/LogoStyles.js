import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: -15px;
  text-decoration: none;
  @media (min-width: 768px) { margin-top: -22px; }
  @media (min-width: 1022px) { margin-top: -85px; }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: -15px;
  margin: auto;
  transition: all .20s ease-in;
  &:hover { transform: scale3d(1.05,1.05,1); }
`;

export const Image = styled.img`
  transition: all .25s ease-in;
  align-self: center;
  height: 6.5em;
  @media (min-width: 500px) { height: 8em; }
  @media (min-width: 768px) { height: 11em; }
`;

export const H1 = styled.h1`
  transition: all .25s ease-in;
  z-index: -1;
  align-self: center;
  margin-top: -26px;
  margin-bottom: 0;
  color: #eb1c24;
  font-size: 1.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  padding: 5px 15px 5px 15px;

  @media (min-width: 500px) { font-size: 2.5rem; margin-top: -32px; }
  @media (min-width: 768px) { font-size: 4rem; margin-top: -44px; }
`
export const Span = styled.span`
  color: #1565c0;
  font-style: italic;
`