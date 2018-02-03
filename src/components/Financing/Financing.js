import React from 'react';
import ComingSoon from '../ComingSoon/index';
import Helmet from 'react-helmet';

const FinancingComponent = () => {
  return (
    <div>
      <Helmet>
        <title>ESC: Financing</title>
        <meta name="description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
      </Helmet>
      <ComingSoon/>
    </div>
  )
}

export default FinancingComponent;