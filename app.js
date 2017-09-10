'use strict';
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const graphqlHTTP = require(`express-graphql`);
const { store } = require('gatsby-data/dist/redux');
const bootstrap = require(`gatsby-data/dist/bootstrap`);

const server = require('express')()
const { parse } = require('url')
const next = require('next')

const getPages = async () => {
  const gql = require('./lib/client')
  const { data } = await gql.query(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            component
          }
        }
      }
    }
  }`)

  return data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
}

const dev = process.env.NODE_ENV !== 'production'
const conf = {
  exportPathMap: async () => {
    return [ { slug: '/post/post1', component: '/post' },
  { slug: '/post/post2', component: '/post' } ]
  }
}
const nextApp = next({ dev, conf })
const handle = nextApp.getRequestHandler()
let pages = [];

const { buildSchema, GraphQLSchema, GraphQLObjectType  } = require('graphql');

(async () => {
  try {
    const { graphqlRunner } = await bootstrap({
      directory: process.cwd(),
      config: {
        siteMetadata: {
          title: `Gatsby Redux`,
        },
        plugins: [
          {
            resolve: `${__dirname}/node_modules/gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content`,
              name: `content`,
            }
          },
          {
            resolve: `${__dirname}/node_modules/gatsby-transformer-remark`
          }
        ]
      }
    });

    await nextApp.prepare()

    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    server.use(
      `/graphql`,
      graphqlHTTP({
        schema: store.getState().schema,
        graphiql: true,
      })
    )

    server.get('*', (req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      const page = pages.find(p => p.slug === pathname)
      if (page) {
        const queryParams = { slug: page.slug }

        nextApp.render(req, res, page.component, {
          slug: pathname
        })
      } else {
        handle(req, res, parsedUrl)
      }
    })

    server.use(function(err, req, res, next) {
      res.status(500).send({ error: err });
    });

    server.listen(PORT, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

    pages = await getPages()
    console.log(pages)

  } catch (e) {
    console.log(e)
  }

})()
