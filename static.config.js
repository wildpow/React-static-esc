// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
import { request } from 'graphql-request'

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/escPandaMattressTesting';

const query = `{
  allToppers {
    currentpromo 
  }
  allAdjBaseses {
    uri
    id
    fullName
    features
    coverImg {
      handle
  }
}
}`


export default {
  getRoutes: async () => {
    const { allToppers, allAdjBaseses } = await request(GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/components/Topper/TopPromo.js',
        getData: () => ({
          allToppers,
        })
      },
      {
        path: '/financing',
        component: 'src/components/Financing/Financing.js'
      },
      {
        path: '/blog',
        component: 'src/components/Blog/Blog.js'
      },
      {
        path: '/accessories',
        component: 'src/components/Accessories/Accessories.js'
      },
      {
        path: '/brands',
        component: 'src/components/Brands/Brands.js'
      },
      {
        path: '/about',
        component: 'src/components/About/About.js'
      },
      {
        path:'/adjustable',
        component: 'src/components/Adjustable/Adjustable.js',
        getData: () => ({
          allAdjBaseses,
        })
      },
      {
        is404: true,
        component: 'src/components/Panda404/Panda404.js'
      }
    ]
  }
}
