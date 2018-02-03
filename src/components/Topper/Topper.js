import React from 'react';
import TopPromo from './TopPromo';
import { Top, Wrapper, Phone, PhoneWrapper } from './TopperStyles';

const Topper = () => {
  return (
    <Top>
      <Wrapper>
        <TopPromo/>
      </Wrapper>
      <Wrapper>
        <PhoneWrapper><Phone href="tel:1-425-512-0017">Call: (425)-512-0017</Phone></PhoneWrapper>
      </Wrapper>
    </Top>
  )
};

export default Topper;