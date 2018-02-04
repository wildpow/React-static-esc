import React from 'react';
import { withRouteData, Head } from 'react-static'
import { AdjMarkdown, Main, StyledLink, H3, InfoWrapper, Img} from './AdjustableStyles';

export default withRouteData(({allAdjBaseses}) => (
  <Main>
    <Head>
        <title>ESC: Ajustable Bases</title>
        <meta name="description" content="E.S.C. Mattress Center carry 4 different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."/>
      </Head>
      
      {allAdjBaseses.map((base) => (
        <StyledLink to={`/adjustable/${base.uri}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <Img src={`https://media.graphcms.com/resize=w:400,h:350,fit:clip/${base.coverImg.handle}`} alt="this"/>
            <AdjMarkdown source={base.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
      ))}
  </Main>
)) 
 
    



