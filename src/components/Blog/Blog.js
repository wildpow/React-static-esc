import React from 'react';
import ComingSoon from '../ComingSoon';
import Helmet from 'react-helmet';

const BlogComponent = () => {
  return (
    <div>
    <Helmet>
      <title>ESC: Blog</title>
      <meta name="description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
    </Helmet>
    <ComingSoon/>
    </div>
  )
}

export default BlogComponent;

