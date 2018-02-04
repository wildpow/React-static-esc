import React from 'react';
import image from '../../images/ezgif.com-optimize.gif';
import { Main, Img, Header, Title } from './Panda404Styles';
import { Link } from 'react-static';

const Panda404 = () => {
  return (
    <Main>
      <Header>
        <Title>Our panda couldn't find the product you're looking for...</Title>
      </Header>
      <Link to='/'><Img src={image} alt="panda sleeping"/></Link>
    </Main>
  )
};

export default Panda404;