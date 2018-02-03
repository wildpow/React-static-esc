import React, { Fragment } from 'react';
import { withRouteData } from 'react-static'
import { Promo } from './TopperStyles';

export default  withRouteData(({ allToppers }) => (
  <Fragment>
    <Promo>{allToppers[0].currentpromo}</Promo>
  </Fragment>
))