import React from 'react';
import { MainFooter, Social, FBimage, Timage,
          Wrapper, YelpHolder, YelpImg, InstaImg,
          MapsImg, Hours, HoursSpan, HoursPara,
          Contact,
          GraphImg, GraphLink
        } from './FooterStyles';
import fbIcon from '../../images/FB.png';
import twitterIcon from '../../images/twitter.png';
import Yelp from '../../images/Yelp_burst_negative_RGB.png';
import Insta from '../../images/glyph-logo_May2016.png';
import Google from '../../images/Google_Maps_App_3.png';
import GraphCMS from '../../images/powered_by_graphcms.svg';


const Footer = () => {
  return(
    <MainFooter>
      <Wrapper>
        <Social>
          <a href="https://www.facebook.com/ESCMattressCenter/" target="_blank" rel="noopener noreferrer">
            <FBimage src={fbIcon} alt="facebook" class="fb__img"/>
          </a>
          <a href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large" target="_blank" rel="noopener noreferrer">
            <Timage src={twitterIcon} alt="twitter"/>
          </a>
          <a href="https://www.instagram.com/escmattresscenter/" target="_blank" rel="noopener noreferrer">
            <InstaImg src={Insta} alt="Instagram"/>
          </a>
          <a href="https://www.yelp.com/biz/esc-mattress-center-everett-3" target="_blank" rel="noopener noreferrer">
            <YelpHolder>
              <YelpImg src={Yelp} alt="yelp"/>
            </YelpHolder>
          </a>
          <a href="https://goo.gl/maps/87hmC4TV4cv" target="_blank" rel="noopener noreferrer">
            <MapsImg src={Google} alt="google"/>
          </a>
          <GraphLink href="https://graphcms.com/" target="_blank" rel="noopener noreferrer">
            <GraphImg src={GraphCMS} alt="GraphCMS logo"/>
          </GraphLink>
        </Social>
        
        <Contact>
          <Hours>
            <HoursSpan>Hours</HoursSpan>
            <HoursPara> 
              Mon-Fri 10am - 8pm<br/>
              Saturday 10am - 7pm<br/>
              Sunday 10am - 6pm
            </HoursPara>
          </Hours>
        <Hours>
          <HoursSpan>Address</HoursSpan>
          <HoursPara>
            10121 Evergreen Way<br/> #30<br/>
            Everett, Washington 98204
          </HoursPara>
        </Hours>
      </Contact>

        
      </Wrapper>
    </MainFooter>
  )
};
export default Footer;

