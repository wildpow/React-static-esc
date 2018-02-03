import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { Wrapper, MainTitle, Main,
        MainInfo, PriceWrapper, MattOnly,
        MattSet, PriceTitle, Article,
        Overview, Warranty, Description,
        StyledMarkDown, Profile } from './SingleMattStyles';

import { Redirect } from 'react-router-dom';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';

const SingleMattress = ({ data: { loading, error, mattress } }) => {
  if (error) return <h1>Error fetching the Mattress!</h1>
  if (!loading) {
    if(!mattress) return <Redirect to='/404'/>
    return (
<Wrapper>
  <Helmet>
    <title>ESC: {mattress.subBrand} {mattress.subName}</title>
    <meta name="description" content={mattress.discription}/>
  </Helmet>
  <MainTitle>
    <h2>{mattress.name}</h2>
  </MainTitle>
  <Main>
    <ImageViewer cover={mattress.coverImg.handle} img1={mattress.detail1.handle} img2={mattress.detail2.handle} />
    <MainInfo>
      <StyledMarkDown source={mattress.features} escapeHtml={false} />
      <PriceWrapper>
        <MattOnly>
          <PriceTitle>Mattress Only Price</PriceTitle>
          <DropDown data={mattress.mattOnly}/>
        </MattOnly>
        <MattSet>
          <PriceTitle>Mattress Set Price</PriceTitle>
          <DropDown data={mattress.setPrice}/>
        </MattSet>
      </PriceWrapper>
    </MainInfo>
  </Main>
  <Overview>
    <h2>OVERVIEW & SPECS</h2>
  </Overview>
  <Article>
    <Description>
      {mattress.discription}
    </Description>
      <Profile>Profile: {mattress.profile}</Profile>
      <StyledMarkDown source={mattress.contruction} escapeHtml={false} />
      <Warranty>{mattress.warranty}</Warranty>
  </Article>
</Wrapper>
    )
  }
  return null
}

export const singleMatt = gql`
  query singleMatt($uri: String) {
    mattress: Mattress(uri: $uri) {
      id
      subName
      subBrand
      name
      discription
      features
      profile
      contruction
      mattOnly
      setPrice
      warranty
      coverImg {
        handle
      }
      detail1 {
        handle
      }
      detail2 {
        handle
      }
    }
  }
`
export default graphql(singleMatt, {
  options: ({ match }) => ({
    variables: {
      uri: match.params.uri
    }
  })
})(SingleMattress)
