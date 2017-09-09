'use strict';
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const graphqlHTTP = require(`express-graphql`);
const { store } = require('gatsby-data/dist/redux');
const bootstrap = require(`gatsby-data/dist/bootstrap`);

const server = require('express')()
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const pages = [];

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

    server.get('*', (req, res, next) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      handle(req, res, parsedUrl)
    })

    server.use(function(err, req, res, next) {
      res.status(500).send({ error: err });
    });

    server.listen(PORT, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

  } catch (e) {
    console.log(e)
  }

})()
