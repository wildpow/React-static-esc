import React from 'react';
import { withRouteData } from 'react-static'

import { AdjMarkdown, Main, StyledLink, H3, InfoWrapper, Img} from './AdjustableStyles';

export default withRouteData(({ Bases }) => (
  <Main>
  {Bases.map((base) => (
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


