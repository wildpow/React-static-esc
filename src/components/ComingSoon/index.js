import React from 'react';
import { Main, Img, Header, Title } from '../Panda404/Panda404Styles';
import image from '../../images/ezgif.com-optimize.gif';

const ComingSoon = () => {
  return (
    <Main>
      <Header>
        <Title>Coming Soon...</Title>
      </Header>
      <Img src={image} alt="panda sleeping"/>
    </Main>
  )
}

export default ComingSoon
