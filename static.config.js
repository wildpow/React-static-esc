// Though this file is optional, there are SO MANY COOL THINGS you can do here.
// Read the docs at https://github.com/nozzle/react-static/blob/master/README.md to learn more!
import { request } from 'graphql-request'

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/escPandaMattressTesting';

const query = `{
  allToppers {
    currentpromo 
  }
}`


export default {
  getRoutes: async () => {
    const { allToppers } = await request(GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/components/Topper/TopPromo.js',
        getData: () => ({
          allToppers,
        })
      }
    ]
  }
}
