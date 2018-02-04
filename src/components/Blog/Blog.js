import React from 'react';
import ComingSoon from '../ComingSoon';
import { Head } from 'react-static';

const BlogComponent = () => {
  return (
    <div>
    <Head>
      <title>ESC: Blog</title>
      <meta name="description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
    </Head>
    <ComingSoon/>
    </div>
  )
}

export default BlogComponent;

