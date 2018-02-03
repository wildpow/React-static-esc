import styled from 'styled-components';

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
  justify-content: center;
  justify-self: center;
  text-align: center;
  flex-wrap: nowrap;
  @media (min-width: 768px) {
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  @media(min-width: 1200px) {
    max-width: 75vw;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 7px 7px 4px 7px;
`;

export const FBimage = styled.img`
  max-width: 3.5rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const Timage = styled.img`
max-width: 4.1rem;
padding-left: 10px;
transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-top-left-radius: .2rem;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const YelpImg = styled.img`
  width: 3.54rem;
  max-height: 3.15rem;
`;

export const InstaImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

export const MapsImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
export const GraphLink = styled.a`
  align-self: center;
  margin: auto;
  padding-top: 5px;
  @media(min-width:500px) { padding-top: 0px;}
`


export const GraphImg = styled.img`
 transition: all .25s ease-in;
 align-self: center;
 margin-left: 10px;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`

export const Contact = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 10px;
margin-bottom: 10px;
`


export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 768px) { font-size: 1.3rem; }
`;

export const HoursPara = styled.p`
  margin-top: 4px;
  margin: 0;
  font-variant: small-caps;
`

export const HoursSpan = styled.span`
  text-decoration: underline;
  padding-bottom: 5px;
`

export const Address = styled.div`

`
export const AddressPara = styled.p`

`

export const AddressSpan = styled.span`

`