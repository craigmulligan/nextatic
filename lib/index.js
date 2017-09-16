const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const graphqlHTTP = require(`express-graphql`);
const server = require('express')()
const next = require('next')
const exportPathMapDefault = require('./exportPathMap')
const dev = process.env.NODE_ENV !== 'production'
const middleware = require('./middleware')
const conf = require('./config')

const { buildSchema, GraphQLSchema, GraphQLObjectType  } = require('graphql');

const nextatic = async (config) => {
  try {
    const nextApp = next({ dev, dir: config.dir, conf: config })

    const exportPathMap = config.exportPathMap || exportPathMapDefault;
    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    
    server.use(
      `/graphql`,
      graphqlHTTP({
        schema: config.schema,
        graphiql: true,
      })
    )

    // Note we have to launch the server first so getPages() has acess to graphql
    server.listen(PORT, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })

    await nextApp.prepare()
    const pages = await exportPathMap()

    // figure out a betterway to share config with server client
    conf.set(nextApp);

    server.use(middleware(
      pages,
      nextApp
    ))

    server.use(function(err, req, res, next) {
      res.status(500).send({ error: err });
    });

    if(module.hot) { console.log('hot!')}

    server.nextApp = nextApp;

  } catch (e) {
    console.log(e)
  }

};

module.exports = nextatic;
