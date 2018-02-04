import React from 'react';
import { Link, Head } from 'react-static';
import { Carousel } from 'react-responsive-carousel'; 
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import { Main, SaleWrapper, SaleImg, TempurImg, SealyImg, StearnsImg } from './HomeStyles';

import Sealy from '../../images/SealyLifestyleRatio.jpg';
import Tempur from '../../images/TempurLifestyleRatio.jpg';
import Stearns from '../../images/StearnsLifestyleRatio.jpg';
import Sale from '../../images/grandOpening.png';

const HomeComponent = () => {
  return (
    <Main>
      <Head>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="
            We offer almost fifty mattresses in a wide range of prices to fit every budget.
            Our mattresses are made in the USA, with most of them coming from local manufacturing
            plants and are brands that most people know and trust. Sealy, Stearns & Foster, and Tempur-Pedic."/>
      </Head>
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={7000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <SaleImg src={Sale} alt="this"/>
        </SaleWrapper>
        <Link to='/brands/stearns'>
          <StearnsImg src={Stearns} alt="this"/>
        </Link>
        <Link to='/brands/tempurpedic'>
          <TempurImg src={Tempur} alt="this"/>
        </Link>
        <Link to='/brands/sealy'>
          <SealyImg src={Sealy} alt="this"/> 
        </Link>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;