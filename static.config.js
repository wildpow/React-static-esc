// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
import { request } from 'graphql-request'

const query = `{
  allAdjBaseses {
    id
    uri
    fullName
    keyfeatures
    features
    price
    brandLine
    brandName
    baseDescription
    height
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
Brands(brand:"Tempur-Pedic") {
  mattresses {
    uri
    brandName
    id
    subName
    subBrand
    coverImg {
      handle
    }
  }
}

}`
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/escPandaMattressTesting';

export default {
  getRoutes: async () => {
    const { allAdjBaseses, Brands } = await request(GRAPHCMS_API, query)
    return [
      {
        path: '/',
        component: 'src/components/Home/Home.js'
      },
      {
        path: '/adjustable',
        component: 'src/components/Adjustable/Adjustable.js',
        getData: async () => ({
          allAdjBaseses,
        }),
        children: allAdjBaseses.map(base => ({
          path: `/adjustable/${base.uri}`,
          component: 'src/components/Adjustable/SingleBase.js',
          getData: async () => ({
            base,
          }),
        })),
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
        path: '/brands/tempurpedic',
        component: 'src/components/MattressList/Tempur.js',
        getData: async () => ({
          Brands,
        })
      },
      {
        path: '/about',
        component: 'src/components/About/About.js'
      },
      {
        is404: true,
        component: 'src/components/Panda404/Panda404.js'
      }
    ]
  }
}
