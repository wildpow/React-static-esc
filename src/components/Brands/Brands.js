import React from 'react';
import {Main, TempurImg, StearnsImg, SealyImg,
        MainText, Footer, StyledLink, BrandWrapper,
        StearnsWrapper } from './BrandsStyles';
import { Helmet } from "react-helmet";
import SealyLogo from '../../images/SealyLogo.png';
import StearnsLogo from '../../images/StearnsLogo.png';
import TempurLogo from '../../images/TempurLogo2.png';


const BrandsComponent = () => {
  return (
    <Main>
    <Helmet>
        <title>ESC: Brands</title>
        <meta name="description" content="Come visit your locally owned, Everett based Sealy, Stearns and Foster & Tempur-Pedic dealer.  We have over 20 years of experience helping people sleep better on the brands we carry.  We carry 3 of the top 5 mattress brands in the US, so come see us, so we can help you sleep like the experts do!"/>

      </Helmet>
      <StyledLink to='/brands/tempurpedic'>
      <BrandWrapper>
        <TempurImg src={TempurLogo} alt="Tempur Logo"/>
        <MainText>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
          TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
          and unique shape, giving you personalized support and alignment for undisturbed sleep.
        </MainText>
        <Footer blue>Tempur-Pedic:<br/> Life-changing sleep.</Footer>
      </BrandWrapper>
      </StyledLink>
      <StearnsWrapper to='/brands/stearns'>
      <BrandWrapper>
      <StearnsImg src={StearnsLogo} alt="Stearn Logo"/>
        <MainText>
        The enduring craftsmanship of Stearns & Foster is their legacy.
        Since 1846 their specially-trained craftsmen have been building mattresses by hand,
        using techniques they developed and spent decades perfecting.  
        They’re so dedicated to what they do, they sign every one.
        </MainText>
        <Footer blue>Stearns & Foster:<br/> Crafting the world’s finest bed.</Footer>
      </BrandWrapper>
      </StearnsWrapper>
      <StyledLink to='/brands/sealy'>
      <BrandWrapper>
        <SealyImg src={SealyLogo} alt="Sealy Logo"/>
        <MainText>
          At the heart of every Sealy mattress is the support that’s right for you.
          Only Sealy has Posturepedic Technology™ to provide more support where you
          need it most.  By precisely engineering the mattress into specific zones,
          they’re able to target reinforced support, while providing exceptional full-body support.
        </MainText>
        <Footer blue>Sealy:<br/> Proud supporter of you.</Footer>
      </BrandWrapper>
      </StyledLink>
    </Main>
  )
}

export default BrandsComponent;