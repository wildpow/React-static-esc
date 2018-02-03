import styled, { keyframes } from 'styled-components';


const AboutFadIn = keyframes`
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
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  animation-duration: .5s;
  animation-name: ${AboutFadIn};
  animation-fill-mode: both;
  @media(min-width:1200px) { margin-left: 10px; margin-right: 10px; }
`;

export const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  background-color: #1565c0;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HeaderText = styled.h2`
  font-size: .9rem;
  padding-right: 5px;
  padding-left: 5px;
  @media(min-width: 768px) { font-size: 1.4rem; line-height: 2rem; }
  @media(min-width: 1024px) { font-size: 1.5rem; }
  @media(min-width: 1300px) { font-size: 1.8rem; letter-spacing: .1rem; }
`;

export const PicHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(min-width: 640px) { justify-content: space-around; }
  @media(min-width: 768px) { justify-content: space-between; }
`;

export const StoreImg1 = styled.img`
  width: 105px;
  height: 100px;
  @media(min-width: 375px) { width: 110px; height: 100px; }
  @media(min-width: 412px) { width: 125px; height:100px ; }
  @media(min-width: 768px) { width: 218px; height: 200px; }
  @media(min-width: 993px) { width: 288px; height: 230px; }
  @media(min-width: 1200px) { width: 358px; height: 280px; }
  @media(min-width: 1300px) { width: 383px; height: 300px; }
  @media(min-width: 1400px) { width: 420px; height: 350px; }
`;

export const MapImg = styled.img`
  width: 130px;
  height: 100px;
  @media(min-width: 375px) { width: 135px; height: 100px; }
  @media(min-width: 412px) { width: 145px; height: 100px; }
  @media(min-width: 768px) { width: 250px; height: 200px; }
  @media(min-width: 993px) { width: 340px; height: 230px; }
  @media(min-width: 1200px) { width: 420px; height: 280px; }
  @media(min-width: 1300px) { width: 470px; height: 300px; }
  @media(min-width: 1400px) { width: 496px; height: 350px; }
`;

export const StoreImg2 = styled.img`
width: 105px;
height: 100px;
@media(min-width: 375px) {width: 110px; height: 100px; }
@media(min-width: 412px) { width:125px; height: 100px;}
@media(min-width: 768px) { width: 218px; height: 200px; }
@media(min-width: 993px) { width: 288px; height: 230px; }
@media(min-width: 1200px) {width: 358px; height: 280px; }
@media(min-width: 1300px) { width: 383px; height: 300px; }
@media(min-width: 1400px) { width: 420px; height: 350px; }
`;

export const Address = styled.p`
  font-family: 'Open Sans', sans-serif;
  background: #eb1c24;
  color: white;
  text-align: center;
  font-size: .9rem;
  padding: 10px;
  line-height: 1.2rem;
  margin-top: 0;
  font-variant: small-caps;
  margin-bottom: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  @media(min-width:768px) { font-size: 1.4rem; line-height: 1.5rem; }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  @media(min-width:768px) { font-size: 1.6rem; }
`;

export const RegularParagraph = styled.p`
 font-family: 'Open Sans', sans-serif;
  padding-left: 12px;
  padding-right: 12px;
  line-height: 1.4rem;
  font-size: 1rem;
  text-indent: 30px;
  padding-top: 10px;
  padding-bottom: 0px;
  @media(min-width:768px) {
    margin-bottom: 0;
    padding-right: 60px;
    padding-left: 60px;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  @media(min-width:1024px) {
    margin-bottom: 0;
    padding-right: 80px;
    padding-left: 80px;
    font-size: 1.6rem;
    line-height: 1.7rem;
  }
`;

export const BlueWrapper = styled.div`
  margin-top: 20px;
  background-color: #1565c0;
  color: white;
  @media(min-width:1024px) { margin-top: 40px }
`;

export const SecondP = styled.p`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Open Sans', sans-serif;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.6rem;
  font-size: 1.3rem;
  letter-spacing: .1rem;
  font-variant: small-caps;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  @media(min-width:1024px) { line-height: 2rem; font-size: 1.8rem; }
`;

export const PopImg = styled.img`
  max-width: 20rem;
  margin: auto;
  @media(min-width: 700px) { max-width: 50rem; }
`;

export const PopHolder = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopNameHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  
  @media(min-width: 700px) { font-size: 2rem; }
`;
export const Col = styled.div`
display: flex;
flex-direction: column;
`;

export const Josh = styled.h4`
  text-align: center;
  padding-right: 26px;
  padding-left: 20px;
  margin-bottom: 10px;
  @media(min-width: 768px) { padding-right: 50px; padding-left: 100px; }
  @media(min-width:1024px) { padding-right: 50px; padding-left: 100px; }
`;


export const Bill = styled.h4`
  margin-bottom: 10px;
  text-align: center;
  padding-right: 40px; 
  padding-left: 33px;
  @media(min-width: 768px) { padding-right: 20px; padding-left: 60px; }
  @media(min-width:1024px) { padding-right: 20px; padding-left: 60px; }
`;
export const Will = styled.h4`
text-align: center;
padding-right: 20px; 
padding-left: 20px;
margin-bottom: 10px;
@media(min-width: 768px) { padding-right: 50px; padding-left: 50px; }
@media(min-width:1024px) { padding-right: 50px; padding-left: 50px; }
`;